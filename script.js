const translations = {
  en: {
    logo: "kasr alsamt",
    tagline: "Truth • Story • Support",
    home: "Home",
    listing: "Listing",
    about: "About",
    search: "Search articles...",
    
  },
  ar: {
    logo: "كسر الصمت",
    tagline: "حقيقة • رواية • دعم",
    home: "الرئيسية",
    listing: "القائمة",
    about: "من نحن",
    search: "ابحث في المقالات...",
  }
};

let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  // ✅ Set lang & dir on <html>
  document.documentElement.lang = currentLang;
  document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  // Update all elements with data-key
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");

    if (element.placeholder !== undefined) {
      element.placeholder = translations[currentLang][key];
    } else {
      element.textContent = translations[currentLang][key];
    }
  });

  // Update button label
  document.getElementById("lang-toggle").textContent =
    currentLang === "en" ? "AR" : "EN";
});


