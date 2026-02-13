// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Current step tracker
    let currentStep = 1;
    let uploadedFiles = [];

    // Initialize the form
    initializeForm();
    initializeFileUpload();

    // Listen for language changes
    document.addEventListener('languageChanged', function(e) {
        // Update review section if on step 4
        if (document.getElementById('step4')?.classList.contains('active')) {
            updateReviewSection();
        }
        
        // Update step titles and labels
        updateStepContent();
    });

    function initializeForm() {
        // Set today's date as max for date picker
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('datePosted');
        if (dateInput) {
            dateInput.max = today;
        }

        // Add terms agreement checker
        const termsCheckbox = document.getElementById('termsAgree');
        const submitBtn = document.getElementById('submitReport');
        if (termsCheckbox && submitBtn) {
            termsCheckbox.addEventListener('change', function() {
                submitBtn.disabled = !this.checked;
            });
        }

        // Update review section when moving to step 4
        updateReviewSection();
    }

    // Update step content based on current language
    function updateStepContent() {
        const lang = window.getCurrentLanguage?.() || 'en';
        const translations = window.translations?.[lang] || {};
        
        // Update all elements with data-key
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder !== undefined) {
                        el.placeholder = translations[key];
                    }
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translations[key];
                } else {
                    el.textContent = translations[key];
                }
            }
        });
    }

    // Navigation functions
    window.nextStep = function(step) {
        if (validateStep(step)) {
            document.getElementById(`step${step}`).classList.remove('active');
            document.getElementById(`step${step + 1}`).classList.add('active');
            
            // Update progress bar
            updateProgress(step + 1);
            
            // Update step indicators
            updateStepIndicators(step + 1);
            
            currentStep = step + 1;
            
            // If moving to review step, update review section
            if (currentStep === 4) {
                updateReviewSection();
            }
        }
    };

    window.prevStep = function(step) {
        document.getElementById(`step${step}`).classList.remove('active');
        document.getElementById(`step${step - 1}`).classList.add('active');
        
        // Update progress bar
        updateProgress(step - 1);
        
        // Update step indicators
        updateStepIndicators(step - 1);
        
        currentStep = step - 1;
    };

    // Validate each step
    function validateStep(step) {
        const lang = window.getCurrentLanguage?.() || 'en';
        
        switch(step) {
            case 1:
                const contentType = document.querySelector('input[name="contentType"]:checked');
                if (!contentType) {
                    showError(lang === 'ar' ? 'الرجاء اختيار نوع المحتوى' : 'Please select a content type');
                    return false;
                }
                return true;
                
            case 2:
                const url = document.getElementById('contentUrl');
                const platform = document.getElementById('platform');
                const date = document.getElementById('datePosted');
                const description = document.getElementById('description');
                
                if (!url.value) {
                    showError(lang === 'ar' ? 'الرجاء إدخال رابط المحتوى' : 'Please provide the content URL');
                    url.focus();
                    return false;
                }
                
                if (!isValidUrl(url.value)) {
                    showError(lang === 'ar' ? 'الرجاء إدخال رابط صحيح' : 'Please enter a valid URL');
                    url.focus();
                    return false;
                }
                
                if (!platform.value) {
                    showError(lang === 'ar' ? 'الرجاء اختيار المنصة' : 'Please select a platform');
                    platform.focus();
                    return false;
                }
                
                if (!date.value) {
                    showError(lang === 'ar' ? 'الرجاء إدخال التاريخ' : 'Please provide the date');
                    date.focus();
                    return false;
                }
                
                if (!description.value.trim()) {
                    showError(lang === 'ar' ? 'الرجاء وصف المحتوى المضلل' : 'Please describe the misleading content');
                    description.focus();
                    return false;
                }
                
                return true;
                
            case 3:
                // Step 3 is optional, always return true
                return true;
                
            default:
                return true;
        }
    }

    // Update progress bar
    function updateProgress(step) {
        const progressFill = document.querySelector('.progress-fill');
        const percentage = (step / 4) * 100;
        progressFill.style.width = `${percentage}%`;
    }

    // Update step indicators
    function updateStepIndicators(activeStep) {
        document.querySelectorAll('.step-item').forEach((item, index) => {
            const stepNum = index + 1;
            item.classList.remove('active', 'completed');
            
            if (stepNum === activeStep) {
                item.classList.add('active');
            } else if (stepNum < activeStep) {
                item.classList.add('completed');
            }
        });
    }

    // File upload handling
    function initializeFileUpload() {
        const dropArea = document.getElementById('dropArea');
        const fileInput = document.getElementById('fileInput');
        
        if (!dropArea || !fileInput) return;
        
        // Click to browse
        dropArea.addEventListener('click', () => fileInput.click());
        
        // File selection
        fileInput.addEventListener('change', handleFileSelect);
        
        // Drag and drop events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
        
        dropArea.addEventListener('drop', handleDrop, false);
    }

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        document.getElementById('dropArea').classList.add('drag-over');
    }

    function unhighlight() {
        document.getElementById('dropArea').classList.remove('drag-over');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFileSelect(e) {
        const files = e.target.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        files = [...files];
        files.forEach(file => {
            if (file.size <= 10 * 1024 * 1024) { // 10MB limit
                uploadedFiles.push(file);
                displayFile(file);
            } else {
                const lang = window.getCurrentLanguage?.() || 'en';
                showError(lang === 'ar' ? 
                    `الملف "${file.name}" يتجاوز الحد الأقصى 10 ميجابايت` : 
                    `File "${file.name}" exceeds 10MB limit`);
            }
        });
    }

    function displayFile(file) {
        const fileList = document.getElementById('fileList');
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const fileSize = (file.size / 1024).toFixed(1);
        
        fileItem.innerHTML = `
            <div class="file-info">
                <span class="material-symbols-outlined">description</span>
                <span>${file.name} (${fileSize} KB)</span>
            </div>
            <span class="material-symbols-outlined remove-file" onclick="removeFile('${file.name}')">close</span>
        `;
        
        fileList.appendChild(fileItem);
    }

    window.removeFile = function(fileName) {
        uploadedFiles = uploadedFiles.filter(file => file.name !== fileName);
        document.querySelectorAll('.file-item').forEach(item => {
            if (item.querySelector('.file-info span:nth-child(2)').textContent.includes(fileName)) {
                item.remove();
            }
        });
    };

    // Update review section
    function updateReviewSection() {
        const lang = window.getCurrentLanguage?.() || 'en';
        const translations = window.translations?.[lang] || {};
        
        // Content Type
        const contentType = document.querySelector('input[name="contentType"]:checked');
        const contentTypeText = contentType?.parentElement.querySelector('.card-label')?.textContent || 
                               (lang === 'ar' ? 'غير محدد' : 'Not selected');
        document.getElementById('reviewContentType').textContent = contentTypeText;
        
        // URL
        const url = document.getElementById('contentUrl').value;
        document.getElementById('reviewUrl').textContent = url || (lang === 'ar' ? 'غير محدد' : 'Not provided');
        
        // Platform
        const platform = document.getElementById('platform');
        const platformText = platform.options[platform.selectedIndex]?.text || 
                            (lang === 'ar' ? 'غير محدد' : 'Not selected');
        document.getElementById('reviewPlatform').textContent = platformText;
        
        // Date
        const date = document.getElementById('datePosted').value;
        document.getElementById('reviewDate').textContent = date ? 
            new Date(date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US') : 
            (lang === 'ar' ? 'غير محدد' : 'Not provided');
        
        // Description
        const description = document.getElementById('description').value;
        document.getElementById('reviewDescription').textContent = description || 
            (lang === 'ar' ? 'غير محدد' : 'Not provided');
        
        // Files
        const filesText = uploadedFiles.length ? 
            (lang === 'ar' ? `${uploadedFiles.length} ملف(ات) مرفق` : `${uploadedFiles.length} file(s) attached`) : 
            (lang === 'ar' ? 'لا يوجد' : 'None');
        document.getElementById('reviewFiles').textContent = filesText;
    }

    // Form submission
    document.getElementById('reportForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const lang = window.getCurrentLanguage?.() || 'en';
        
        if (!document.getElementById('termsAgree').checked) {
            showError(lang === 'ar' ? 
                'الرجاء تأكيد دقة المعلومات' : 
                'Please confirm the accuracy of your report');
            return;
        }
        
        // Generate reference number
        const refNumber = 'RPT-' + Date.now().toString(36).toUpperCase() + '-' + 
                         Math.random().toString(36).substring(2, 6).toUpperCase();
        
        // Show success modal
        document.getElementById('refNumber').textContent = refNumber;
        document.getElementById('successModal').classList.add('show');
        
        // Here you would typically send the form data to your server
        console.log('Report submitted:', {
            contentType: document.querySelector('input[name="contentType"]:checked')?.value,
            url: document.getElementById('contentUrl').value,
            platform: document.getElementById('platform').value,
            date: document.getElementById('datePosted').value,
            description: document.getElementById('description').value,
            isHarmful: document.querySelector('input[name="isHarmful"]')?.checked,
            additionalSources: document.getElementById('additionalSources').value,
            email: document.getElementById('contactEmail').value,
            files: uploadedFiles.map(f => f.name),
            reference: refNumber
        });
    });

    // Helper functions
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    function showError(message) {
        alert(message);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('successModal');
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Make updateReviewSection available globally
    window.updateReviewSection = updateReviewSection;
});