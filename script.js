(function () {
    "use strict";

    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchStats = document.getElementById('searchStats');
    const resultsCount = document.getElementById('resultsCount');

    // ---------- Bilingual dictionary (English / Arabic) ----------
    const translations = {
        en: {
            // Header
            logo: "kasr alsamt",
            tagline: "Truth • Story • Support",
            home: "Home",
            listing: "Listing",
            about: "About",
            report: "Report",
            reportBtn: "Report a Propaganda",
            langBtn: "AR",

            // Search
            search: "Search articles...",

            // Hero Section
            heroTitle: "Countering propaganda with evidence",
            heroDesc: "Zionist propaganda relies on myths, erasure, and distortion. This project systematically documents primary sources, archival records, and institutional findings — each case exposes a specific falsehood with verifiable evidence. Our goal: truth, accountability, and historical justice.",

            // Importance Cards
            imp1Title: "Primary sources",
            imp1Desc: "Declassified IDF archives, Israeli state comptroller reports, Ottoman & British censuses — we bring the documents to light.",
            imp2Title: "International law",
            imp2Desc: "UN resolutions (194, 2334), ICJ advisory opinions, Geneva Convention violations — legal evidence of systematic discrimination.",
            imp3Title: "Human rights monitoring",
            imp3Desc: "B'Tselem, HRW, Amnesty, Al Mezan, Yesh Din — cross-referenced reports from Israeli and international organizations.",
            imp4Title: "Academic consensus",
            imp4Desc: "Ilan Pappé, Yehouda Shenhav, Rashid Khalidi, Robert Malley, Jerusalem Declaration — scholarship that refuses to be silenced.",

            // Featured Articles
            featuredTitle: "Featured articles",
            viewAll: "View all cards",
            featured1Title: "1948 Nakba",
            featured1Desc: "Plan Dalet, 418 villages destroyed, 750,000 refugees — the ethnic cleansing of Palestine, documented.",
            featured2Title: "Water discrimination",
            featured2Desc: "Settlers: 300L/day, Palestinians: 80L. 90% Gaza water undrinkable. World Bank, B'Tselem, Amnesty.",
            featured3Title: "Oslo betrayal",
            featured3Desc: "1993: 110k settlers → 2024: 720k. 150+ outposts built. Peace Now: 'Oslo institutionalized the occupation.'",

            // CTA Section
            ctaTitle: "12 evidence dossiers — one click away",
            ctaDesc: "Military justice apartheid, absentee property, heritage theft, Gaza siege, 'no partner' myth, and more.",
            ctaBtn: "Explore all cards",

            // Footer
            footerText: "© 2026 Kasr Alsamt — documented counter-narratives. All evidence cross-referenced.",
            footerCredits: "Design: Truth • Story • Support",

            // Report Page Translations
            reportTitle: "Report Propaganda",
            reportSubtitle: "Help us identify and verify misleading information. Your report helps maintain truth and accuracy.",

            // Steps
            step1Label: "Content Type",
            step2Label: "Details",
            step3Label: "Evidence",
            step4Label: "Review",

            step1Title: "What type of content are you reporting?",
            step2Title: "Provide details about the content",
            step3Title: "Provide evidence (optional but helpful)",
            step4Title: "Review your report",

            // Content Types
            contentArticle: "Article / News",
            contentArticleDesc: "False news articles, misleading headlines",
            contentSocial: "Social Media Post",
            contentSocialDesc: "Misinformation on social platforms",
            contentImage: "Image / Meme",
            contentImageDesc: "Manipulated images or misleading memes",
            contentVideo: "Video",
            contentVideoDesc: "Misleading or edited videos",
            contentAudio: "Audio / Podcast",
            contentAudioDesc: "Misleading audio content",
            contentOther: "Other",
            contentOtherDesc: "Other types of propaganda",

            // Form Labels
            urlLabel: "Content URL / Source *",
            urlPlaceholder: "https://...",
            platformLabel: "Platform where you saw this *",
            selectPlatform: "Select platform",
            platformTwitter: "Twitter / X",
            platformFacebook: "Facebook",
            platformInstagram: "Instagram",
            platformTiktok: "TikTok",
            platformYoutube: "YouTube",
            platformTelegram: "Telegram",
            platformWhatsapp: "WhatsApp",
            platformNews: "News Website",
            platformOther: "Other",
            dateLabel: "Date posted / discovered *",
            descriptionLabel: "Describe the misleading content *",
            descriptionPlaceholder: "Please describe what makes this content propagandistic or misleading...",
            harmfulCheck: "This content promotes hatred, violence, or discrimination",

            // Evidence
            dragDrop: "Drag & drop files here or",
            browse: "browse",
            uploadHint: "Supported: Images, PDFs, Screenshots (Max 10MB)",
            additionalLabel: "Additional sources / references",
            additionalPlaceholder: "Links to fact-checks, additional evidence...",
            emailLabel: "Your email (optional, for follow-up)",
            emailPlaceholder: "your@email.com",

            // Review
            reviewContentType: "Content Type",
            reviewUrl: "Source URL",
            reviewPlatform: "Platform",
            reviewDate: "Date",
            reviewDescription: "Description",
            reviewFiles: "Files attached",
            none: "None",
            termsText: "I confirm that the information provided is accurate to the best of my knowledge",

            // Buttons
            prevBtn: "Previous",
            nextBtn: "Next Step",
            submitBtn: "Submit Report",

            // Modal
            modalTitle: "Report Submitted Successfully!",
            modalText: "Thank you for helping maintain truth and accuracy. Our team will review your report within 24-48 hours.",
            reference: "Reference #",
            returnHome: "Return Home",
            submitAnother: "Submit Another",

            // About Page
            contact: "Contact",
            aboutTitle: "About Kasr Alsamt",
            aboutSubtitle: "Documenting truth through evidence, challenging propaganda with facts — a systematic archive of primary sources.",
            mission1Title: "Document",
            mission1Text: "We collect and preserve declassified archives, official reports, and institutional findings that expose propaganda.",
            mission2Title: "Verify",
            mission2Text: "Every claim cross-referenced with multiple sources — UN documents, human rights reports, and academic research.",
            mission3Title: "Expose",
            mission3Text: "We make evidence accessible, dismantling myths through verifiable facts and primary documentation.",
            storyTitle: "Our Story",
            storyText: "Founded in 2019, Kasr Alsamt emerged from a collective of researchers, historians, and human rights advocates who recognized that propaganda thrives in darkness. By bringing primary sources to light — from declassified IDF archives to UN resolutions and human rights monitoring — we created an accessible repository of evidence. Today, our archive contains over 1,000 primary sources, each challenging a specific falsehood with verifiable documentation. Our commitment remains: truth, accountability, and historical justice.",
            statEvidence: "Evidence Dossiers",
            statSources: "Primary Sources",
            statFounded: "Founded",
            principlesTitle: "Our Principles",
            principle1: "Evidence-based research only",
            principle2: "Cross-referenced sources",
            principle3: "Primary documentation",
            principle4: "Accessible to all",

            // Contact Page
            contactTitle: "Get In Touch",
            contactSubtitle: "Have evidence to share? Questions about our research? We'd love to hear from you.",
            contactInfo: "Contact Information",
            email: "Email",
            phone: "Phone",
            office: "Office",
            response: "Response Time",
            responseText: "We typically respond within 24-48 hours. For urgent matters, please specify in subject line.",
            sendMessage: "Send a Message",
            nameLabel: "Your Name",
            namePlaceholder: "John Doe",
            emailLabel: "Email Address",
            emailPlaceholder: "john@example.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "Research collaboration, evidence submission...",
            messageLabel: "Message",
            messagePlaceholder: "Your message here...",
            sendBtn: "Send Message",
            successMessage: "Thank you! Your message has been sent. We'll respond within 24-48 hours.",
            privacyNote: "Your information is kept confidential and used only to respond to your inquiry.",

            //listing page
            // Add to the 'en' section:
            // Card 1
            card1Title: "1948 Nakba",
            card1Desc: "The systematic depopulation of over 400 Palestinian towns, not 'abandonment' during war.",
            card1Evidence: "📌 archival evidence",
            card1EvidenceText: "• Ilan Pappé, 'The Ethnic Cleansing of Palestine' (2006) – IDF archives. Plan Dalet: 418 villages destroyed, 750,000 refugees.",
            card1Citation: "Zochrot / Benny Morris",

            // Card 2
            card2Title: "Water discrimination",
            card2Desc: "West Bank: settlers consume 4x more than Palestinians – illegal under international law.",
            card2Evidence: "💧 World Bank / UN",
            card2EvidenceText: "• Israelis: 300 litres/day, Palestinians: 80 litres (below WHO). 90% Gaza water unfit to drink. Amnesty 2019.",
            card2Citation: "B'Tselem 'Parched Sea' 2023; World Bank",

            // Card 3
            card3Title: "Oslo betrayal",
            card3Desc: "Oslo Accords did not freeze settlements — they doubled (1993–2000).",
            card3Evidence: "📈 settlement watch",
            card3EvidenceText: "• 1993: 110,000 settlers; 2000: 198,000; 2023: >490,000. 150+ outposts built since Oslo.",
            card3Citation: "Peace Now; B'Tselem 2024",

            // Card 4
            card4Title: "Military justice apartheid",
            card4Desc: "West Bank: Palestinians in military courts, settlers in civilian courts – same territory.",
            card4Evidence: "⚖️ Human Rights Watch 2021",
            card4EvidenceText: "• 'A Threshold Crossed' – apartheid. 99.7% Palestinian conviction rate; settlers tried under civil law.",
            card4Citation: "HRW 2021; Yesh Din 2022",

            // Card 5
            card5Title: "Absentee Property Law",
            card5Desc: "How Israel legalized seizure of Palestinian land using 'present absentees' – those inside yet labelled absent.",
            card5Evidence: "⚖️ legal proof",
            card5EvidenceText: "• 1950 Absentee Property Law – still in effect. 30% of West Bank land and massive areas inside Israel were confiscated. • UNCCP estimates 7.8 billion USD in immovable assets taken (1948 refugees only).",
            card5Citation: "BADIL; UN doc. A/AC.25/W.81",

            // Card 6
            card6Title: "Myth: empty land",
            card6Desc: "Pre-Zionist Palestine was densely inhabited with centuries-old cities, culture, agriculture.",
            card6Evidence: "🗺️ ottoman & british census",
            card6EvidenceText: "• 1880s: Jerusalem, Jaffa, Nablus, Gaza – over 450,000 indigenous inhabitants. • 1918: population ~700,000 Arabs, 56,000 Jews (British estimates).",
            card6Citation: "Justin McCarthy, 'The Population of Palestine'",

            // Card 7
            card7Title: "No population exchange",
            card7Desc: "False equivalence: Mizrahi Jews vs. Palestinian refugees – distinct legal/historical contexts.",
            card7Evidence: "📄 UN & historical record",
            card7EvidenceText: "• 1948 Palestinian refugees: forced expulsion, UNRWA mandate, Right of Return (UNGA 194). • Mizrahi Jews: no UN recognition as refugees, Israeli citizenship granted.",
            card7Citation: "Yehouda Shenhav, 'The Arab Jews'",

            // Card 8
            card8Title: "Heritage theft",
            card8Desc: "Excavations erase Palestinian layers, rebrand sites as exclusively Jewish heritage.",
            card8Evidence: "🏺 case: city of david / silwan",
            card8EvidenceText: "• 85% of Silwan homes threatened by Elad settler organization; tunnels undermine Palestinian neighbourhoods. • UNESCO resolutions condemn Israel as occupying power altering Jerusalem sites.",
            card8Citation: "UNESCO 39C/49; Emek Shaveh",

            // Card 9
            card9Title: "2005 siege, not peace",
            card9Desc: "Withdrawal reframed as concession – actually maintained full control: air, sea, water, population registry.",
            card9Evidence: "🚫 siege evidence",
            card9EvidenceText: "• 2005–2024: Israel controls 100% of Gaza's airspace, territorial waters, crossings, and civilian database. • 'Occupied territory under int. law' – UN, ICRC, UNHRC.",
            card9Citation: "ICRC; Al Mezan 2024",

            // Card 10
            card10Title: "False 'no partner'",
            card10Desc: "Narrative that Israel made unprecedented offers – omits continued colonization and unequal terms.",
            card10Evidence: "📋 camp david / taba 2000-01",
            card10EvidenceText: "• Arafat accepted Clinton parameters, Israel added reservations, more settlements. • Palestinian offer: 1967 borders with swaps, rejected by Olmert 2008.",
            card10Citation: "Robert Malley; Le Monde diplomatique",

            // Card 11
            card11Title: "Weaponizing antisemitism",
            card11Desc: "Legitimate criticism of Israel labelled antisemitic to silence evidence-based advocacy.",
            card11Evidence: "🧾 IHRA definition critique",
            card11EvidenceText: "• 110+ Jewish scholars & 40+ organizations: 'Jerusalem Declaration on Antisemitism' (2021) distinguishes criticism from bigotry. • Using antisemitism allegations to suppress BDS and human rights defenders.",
            card11Citation: "JDA; HRW 'Discourse on Denial'",

            // Card 12
            card12Title: "'Natural growth'",
            card12Desc: "Myth that settlements expand only due to births — state-funded incentives and land grabs.",
            card12Evidence: "💰 israeli state subsidies",
            card12EvidenceText: "• 2022: settler municipalities receive $2,300 per capita more than Israeli non-settler cities. • 50% of land in West Bank allocated for settlements, not 'natural growth'.",
            card12Citation: "Sikkuy report 2023; State Comptroller 2021",

            // Footer and search
            footerNote: "Every claim cross‑referenced with institutional sources. Click any card to open its dedicated evidence page.",
            clearSearch: "Clear search",
            noResults: "No matching articles found",
            tryDifferent: "Try different keywords or clear the search",



            //absentee property law
            // Add to the 'en' section:
            backToCards: "Back to all cards",
            absenteeDeepTitle: "Absentee Property Law: Legalizing Land Seizure",
            statDunams: "Dunams confiscated",
            statPresentAbsentees: "'Present Absentees'",
            statYear: "Law enacted",
            absenteeSection1: "The 'Present Absentee' Paradox",
            absenteeText1: "The 1950 Absentee Property Law defines an 'absentee' as anyone who, between 29 November 1947 and 1 September 1948, was in any Arab country or any area outside Israel – even if they remained inside what became Israel.",
            absenteeText2: "This created the category of 'present absentees' – Palestinian citizens of Israel who were present in the country but legally classified as absent, their property seized.",
            absenteeText3: "Approximately 30,000–40,000 'present absentees' lost their land – including 25% of all land owned by Palestinians inside Israel.",
            absenteeSection2: "Scope of Confiscation",
            absenteeText4: "By 1954, the Custodian of Absentee Property had taken control of 4 million dunams (1 million acres) – 40% of all land owned by Palestinians before 1948.",
            absenteeText5: "UNCCP estimated the value of immovable property seized from 1948 refugees at $7.8 billion (1948 value) – over $100 billion today.",
            absenteeText6: "Entire villages were transferred to the Development Authority and then to the Jewish National Fund (JNF), making them 'state land' inaccessible to Palestinians.",
            absenteeSection3: "Extension to Occupied Territories",
            absenteeText7: "After 1967, Israel extended the Absentee Property Law to East Jerusalem and the West Bank via Military Orders 58 and 59.",
            absenteeText8: "In East Jerusalem, over 8,000 dunams (2,000 acres) of Palestinian land were confiscated under this law, transferred to the Israel Lands Authority for Jewish settlement.",
            absenteeText9: "BADIL (2023): 30% of West Bank land is formally designated 'absentee property', much of it allocated to settlements.",
            absenteeSection4: "Legal Criticism",
            absenteeQuote: "Adalah (Legal Center for Arab Minority Rights): 'The Absentee Property Law is a cornerstone of Israel's system of land confiscation. It remains in full force, preventing Palestinian citizens from reclaiming their own property – even when they never left.'",
            absenteeText10: "UN Human Rights Committee (2022): Repeatedly called for repeal of the Absentee Property Law as discriminatory and contrary to international law.",
            absenteeText11: "The law continues to prevent the internal Palestinian refugees (present absentees) from returning to their villages, such as Saffuriyya, al-Birwa, and Iqrit.",
            downloadText: "Download full evidence dossier (PDF)",
            downloadBtn: "Download",
            absenteeCitation1: "BADIL 2023; UNCCP doc. A/AC.25/W.81",
            absenteeCitation2: "Adalah legal reports; UN Human Rights Committee 2022",
            absenteeCitation3: "Military Orders 58, 59",
            relatedCards: "Related Evidence Cards",
            related1: "Myth: Empty Land",
            related1Desc: "Pre-Zionist Palestine was densely inhabited with centuries-old cities.",
            related2: "1948 Nakba",
            related2Desc: "The systematic depopulation of over 400 Palestinian towns.",
            related3: "No Population Exchange",
            related3Desc: "False equivalence: Mizrahi Jews vs. Palestinian refugees.",


            //empty land page
            // Add to the 'en' section:
            emptylandDeepTitle: "'A Land Without a People': The Demographic Reality of Palestine",
            stat1878: "Population 1878",
            stat1918: "Population 1918",
            statVillages: "Villages",
            emptylandSection1: "Origins of the Slogan",
            emptylandText1: "The phrase 'A land without a people for a people without a land' was first used in 1843 by Lord Shaftesbury, decades before political Zionism – referring not to Palestine but to Argentina.",
            emptylandText2: "Theodor Herzl himself never used the phrase. In 'Altneuland' (1902), he described a Palestine already inhabited by 'wretched, backward' Arabs whom he imagined would benefit from Zionism.",
            emptylandText3: "Israel Zangwill popularized the slogan after visiting Palestine in 1897, later admitting: 'We were deceived... Palestine has its inhabitants.'",
            emptylandSection2: "Ottoman and British Census Records",
            emptylandText4: "1878 Ottoman census: Population of Palestine approximately 450,000 – 87% Muslim, 10% Christian, 3% Jewish. Jerusalem: 30,000 inhabitants, Jaffa: 17,000, Nablus: 25,000, Gaza: 19,000.",
            emptylandText5: "1918 British military census: 700,000 Arabs, 56,000 Jews. Arab population concentrated in 800+ villages and dozens of towns and cities.",
            emptylandText6: "1922 British Mandate census: 757,182 total population – 78% Muslim, 11% Jewish, 9.6% Christian, 1.4% other.",
            emptylandSection3: "Urban Centers and Agriculture",
            emptylandText7: "By late Ottoman period, Palestine had major urban centers: Jerusalem (50,000), Jaffa (40,000), Gaza (35,000), Hebron (25,000), Nablus (25,000), Nazareth (12,000), Acre (11,000), Safad (10,000), Tiberias (7,000).",
            emptylandText8: "Palestinian agriculture exported citrus, olive oil, grain, and soap worldwide. Jaffa oranges won international prizes in 1880s Paris Exhibition.",
            emptylandText9: "Over 800 villages existed, each with centuries-old olive groves, terraces, water systems, and communal institutions.",
            emptylandSection4: "Academic Consensus",
            emptylandQuote: "Justin McCarthy, 'The Population of Palestine' (1990): 'The myth that Palestine was an empty land waiting for Jewish settlement is demonstrably false. Extensive demographic records prove a large, established, and developing indigenous society.'",
            emptylandText10: "Rashid Khalidi (2020): 'The \"empty land\" myth served to erase the existence of the Palestinian people and justify their dispossession. It has no basis in historical fact.'",
            emptylandText11: "Ilan Pappé (2006): 'The claim that Palestine was empty was a necessary precondition for the ethnic cleansing of 1948. You cannot cleanse a land you admit is inhabited.'",
            emptylandText12: "Salman Abu Sitta (2022): 'The myth persists despite overwhelming evidence because it serves the ongoing project of Zionist colonization.'",
            downloadTextEmpty: "Download full evidence dossier (PDF)",
            emptylandCitation1: "Justin McCarthy, 'The Population of Palestine'",
            emptylandCitation2: "Ottoman archives; British Mandate censuses 1922, 1931",
            emptylandCitation3: "Rashid Khalidi; Ilan Pappé; Salman Abu Sitta",
            related1Empty: "Absentee Property Law",
            related1DescEmpty: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related2Empty: "1948 Nakba",
            related2DescEmpty: "The systematic depopulation of over 400 Palestinian towns.",
            related3Empty: "No Population Exchange",
            related3DescEmpty: "False equivalence: Mizrahi Jews vs. Palestinian refugees.",


            //gaza siege page
            // Add to the 'en' section:
            siegeDeepTitle: "Gaza 'Disengagement': From Occupation to Siege",
            statPopulation: "Population under siege",
            statAid: "Dependent on aid",
            statYearSiege: "'Disengagement'",
            siegeSection1: "The 'Disengagement' Hoax",
            siegeText1: "In August 2005, Israel evacuated 8,000 settlers from 21 settlements in Gaza. The land was not transferred to Palestinian sovereignty – Israel retained 'security control' over all entry points, airspace, and sea.",
            siegeText2: "Prime Minister Ariel Sharon's Chief of Staff, Dov Weisglass, admitted: 'The disengagement supplies the amount of formaldehyde that is necessary so there will be no political process with the Palestinians.'",
            siegeText3: "2006: Israel designated Gaza a 'hostile territory' and imposed a full land, air, and naval blockade – collective punishment illegal under international law.",
            siegeSection2: "Control Without Presence",
            siegeText4: "Airspace: Israel controls Gaza's airspace, including drone surveillance 24/7. No aircraft can enter or leave without Israeli permission.",
            siegeText5: "Territorial waters: Israel enforces a 3-nautical-mile fishing limit (reduced from 20 miles in 2000). Fishermen are shot, boats confiscated daily.",
            siegeText6: "Population registry: Israel controls the Palestinian population registry. Gaza Palestinians cannot change address, marry, study abroad, or return without Israeli approval.",
            siegeText7: "Crossings: All six land crossings are controlled by Israel (Rafah crossing partially supervised by Egypt, but Israel controls biometric database and goods entry).",
            siegeSection3: "Occupied Under International Law",
            siegeQuote: "International Committee of the Red Cross (ICRC) 2023: 'Gaza remains occupied territory under international humanitarian law. Israel continues to exercise effective control over key aspects of daily life and the territory's borders, airspace, and sea.'",
            siegeText8: "UN Human Rights Council (2023): 'Israel's designation of Gaza as a \"hostile entity\" does not change its legal status as Occupied Territory. The blockade is collective punishment, a grave breach of the Fourth Geneva Convention.'",
            siegeText9: "Amnesty International (2024): 'The blockade has created the world's largest open-air prison. It is a form of apartheid and must be ended immediately.'",
            siegeText10: "UN Office for the Coordination of Humanitarian Affairs (OCHA): 2024 – 2.3 million Palestinians in Gaza under siege, 80% dependent on international aid, 96% of water unfit for drinking.",
            siegeSection4: "Humanitarian Catastrophe",
            siegeText11: "World Bank 2023: Gaza's economy is in collapse – unemployment 70%, poverty rate 80%, 62% of population food insecure.",
            siegeText12: "WHO 2024: 50% of essential medicines are at 'zero stock' level. Power outages 12–16 hours daily. 90% of water from aquifer is undrinkable.",
            siegeText13: "Al Mezan (2024): Since 2005, over 6,000 Palestinians killed in Gaza by Israeli forces, including 1,500 children. 25,000 injured. 20,000 homes destroyed.",
            downloadTextSiege: "Download full evidence dossier (PDF)",
            siegeCitation1: "ICRC 2023; UNHRC 2023",
            siegeCitation2: "Amnesty International 2024; UN OCHA",
            siegeCitation3: "World Bank 2023; WHO 2024; Al Mezan 2024",
            related1Siege: "Absentee Property Law",
            related1DescSiege: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related2Siege: "Water Discrimination",
            related2DescSiege: "Settlers consume 4x more water than Palestinians in the West Bank.",
            related3Siege: "False 'No Partner'",
            related3DescSiege: "Narrative that Israel made unprecedented offers – omits continued colonization.",


            // heritage theft page
            // Add to the 'en' section:
            heritageDeepTitle: "Erasing Palestine: The Theft of Cultural Heritage",
            statSilwan: "Silwan homes under threat",
            statArtifacts: "Artifacts removed",
            statUnesco: "UNESCO resolutions",
            heritageSection1: "City of David / Silwan",
            heritageText1: "Silwan is a Palestinian neighborhood of 50,000 residents, built on centuries-old terraces overlooking Al-Aqsa. Since 1991, the settler organization Elad has taken over 85% of homes in the 'core' of the village, operating archaeological tunnels beneath them.",
            heritageText2: "Emek Shaveh (2023): 'The tunnels erase Palestinian history, presenting Silwan exclusively as the 'City of David' – biblical heritage, while ignoring 1,400 years of Islamic and Christian presence. The archaeology is politicized to justify displacement.'",
            heritageText3: "Israeli Committee Against House Demolitions (ICAHD): Over 1,000 demolition orders issued in Silwan since 2004; 150 homes demolished. Tunnel excavation has caused structural collapse of dozens of Palestinian homes.",
            heritageSection2: "UNESCO: Occupying Power",
            heritageQuote: "UNESCO Resolution 39C/49 (2016): 'Condemns the occupying power for its persistent excavations, tunneling, and unilateral works in East Jerusalem, which are illegal under international law and alter the historical fabric and integrity of the Holy City.'",
            heritageText4: "UNESCO 40C/23 (2017): Reaffirms that East Jerusalem is occupied territory; calls on Israel to cease excavations, respect the status quo of holy sites, and recognize Jordanian custodianship.",
            heritageText5: "UNESCO 2022: 'The Mughrabi Gate excavations, the Gihon Spring tunnel, and the Kedem Center compound all constitute violations of the 1954 Hague Convention for the Protection of Cultural Property in the Event of Armed Conflict.'",
            heritageSection3: "Systematic Rebranding",
            heritageText6: "Hebron: Ibrahimi Mosque / Cave of the Patriarchs – UNESCO World Heritage site. Since 1967, Israel has progressively divided the site, imposed settler-only prayer times, and rebranded signage to emphasize Jewish narrative exclusively.",
            heritageText7: "Al-Aqsa / Temple Mount: Israel restricts Palestinian access, permits settler tours under armed guard, and excavates beneath the compound (Western Wall tunnels) causing structural damage.",
            heritageText8: "Beit She'an, Sebastia, Jericho: Israeli authorities replace Arabic street names, omit Islamic and Christian history from tourist signage, present sites as exclusively Jewish ancient heritage.",
            heritageSection4: "Looting and Antiquities Trade",
            heritageText9: "Emek Shaveh (2024): 'Since 1967, approximately 100,000 artifacts have been removed from occupied Palestinian territories and integrated into Israeli national collections, without Palestinian consent or international oversight.'",
            heritageText10: "Antiquities Law (1978): All 'antiquities' found in the West Bank after 1967 are declared state property of Israel. Palestinian excavators are banned; settler excavation permits are routinely granted.",
            heritageText11: "Israel Museum, Bible Lands Museum: Exhibit artifacts from Sebastia, Jericho, and Herodion labeled 'Israel', 'Judea and Samaria' – erasing Palestinian provenance.",
            heritageSection5: "Palestinian Cultural Resistance",
            heritageText12: "Palestinian Museum (Birzeit): Established 2016 to preserve and narrate Palestinian heritage from within. Faces repeated Israeli travel restrictions on staff and international loan objects.",
            heritageText13: "UNESCO 'State of Palestine' membership (2011): Palestine acceded to the World Heritage Convention. Two sites inscribed (Birthplace of Jesus: Church of the Nativity, 2012; Ancient Jericho, 2023) – Israel condemned both inscriptions.",
            downloadTextHeritage: "Download full evidence dossier (PDF)",
            heritageCitation1: "UNESCO resolutions 39C/49, 40C/23",
            heritageCitation2: "Emek Shaveh reports 2023–2024",
            heritageCitation3: "Israeli Antiquities Law 1978",
            heritageCitation4: "Palestinian Museum; ICOMOS",
            related1Heritage: "Absentee Property Law",
            related1DescHeritage: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related2Heritage: "Myth: Empty Land",
            related2DescHeritage: "Pre-Zionist Palestine was densely inhabited with centuries-old cities.",
            related3Heritage: "1948 Nakba",
            related3DescHeritage: "The systematic depopulation of over 400 Palestinian towns.",


            // military justice page
            // Add to the 'en' section:
            militaryDeepTitle: "Two-Tier Justice: Military Courts for Palestinians, Civilian Courts for Settlers",
            statConviction: "Palestinian conviction rate",
            statPlea: "Plea bargain rate",
            statAge: "Age of military court jurisdiction",
            militarySection1: "Dual Legal System",
            militaryText1: "Palestinians in West Bank (including East Jerusalem) are tried in Israeli military courts under military orders – over 1,000 orders, many dating from 1967.",
            militaryText2: "Israeli settlers in the same territory are tried in Israeli civilian courts (Magistrate, District, Supreme Court).",
            militaryText3: "East Jerusalem: Palestinians under 'permanent residency' face military courts for security offenses, settlers under civilian law.",
            militarySection2: "Conviction Rates & Due Process",
            militaryText4: "Yesh Din (2022): 99.74% of Palestinian military court cases end in conviction – plea bargain rate 95%.",
            militaryText5: "Average pretrial detention: Palestinians 12–18 months; settlers charged with same offenses often released on bail.",
            militaryText6: "Hearings translated into Hebrew, not Arabic; Palestinians require translator, rarely provided effectively.",
            militarySection3: "International Law: Apartheid",
            militaryQuote: "Human Rights Watch (2021): 'Israel's maintenance of two separate legal systems for Palestinians and Israelis in the same territory constitutes the crime of apartheid.'",
            militaryText7: "Amnesty International 2022: 'Military courts deny Palestinians right to fair trial – institutionalized discrimination.'",
            militaryText8: "UN Special Rapporteur 2023: 'Dual legal system is a pillar of Israeli apartheid.'",
            militaryText9: "B'Tselem 2021: 'Separate legal systems, separate roads, separate rights – definition of apartheid regime.'",
            militarySection4: "Children in Military Courts",
            militaryText10: "Israel is the only country in the world that automatically tries children (12+) in military courts.",
            militaryText11: "UNICEF: 500-700 Palestinian children prosecuted annually; 70% report physical violence during arrest.",
            militaryText12: "Military Order 1651 (2009) lowered age of criminal responsibility from 14 to 12 for Palestinians only.",
            downloadTextMilitary: "Download full evidence dossier (PDF)",
            militaryCitation1: "HRW 'A Threshold Crossed' 2021",
            militaryCitation2: "Yesh Din 2022; B'Tselem 2021",
            militaryCitation3: "UNICEF; Military Order 1651",
            militaryCitation4: "UN Special Rapporteur 2023",
            related1Military: "Absentee Property Law",
            related1DescMilitary: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related2Military: "Water Discrimination",
            related2DescMilitary: "Settlers consume 4x more water than Palestinians in the West Bank.",
            related3Military: "Oslo Betrayal",
            related3DescMilitary: "Oslo Accords did not freeze settlements — they doubled.",



            // nakba page
            // Add to the 'en' section:
            nakbaDeepTitle: "1948 Nakba: The Ethnic Cleansing of Palestine",
            statVillages: "Villages destroyed",
            statRefugees: "Refugees (1948)",
            statPopulation: "Of Arab population displaced",
            nakbaSection1: "Historical Overview",
            nakbaText1: "Plan Dalet (Plan D) was adopted in March 1948 by the Zionist leadership to expel Palestinian civilians and conquer Arab-majority areas.",
            nakbaText2: "Over 418 villages were destroyed; 15 cities and towns depopulated. At least 750,000 Palestinians became refugees – 80% of the Arab population.",
            nakbaText3: "Massacres such as Deir Yassin (April 1948) caused mass flight and panic.",
            nakbaSection2: "Israeli Revisionist Historiography",
            nakbaText4: "Benny Morris (The Birth of the Palestinian Refugee Problem, 1987): declassified IDF archives confirmed expulsions and atrocities.",
            nakbaText5: "Ilan Pappé: 'The Ethnic Cleansing of Palestine' (2006) – provides maps, orders, testimonies proving systematic cleansing.",
            nakbaText6: "Avi Shlaim: 'Collusion Across the Jordan' – revealed cooperation with Transjordan to divide Palestine.",
            nakbaSection3: "UN Recognition & Right of Return",
            nakbaQuote: "UN General Assembly Resolution 194 (1948) affirms the right of Palestinian refugees to return to their homes and property.",
            nakbaText7: "UNCCP (Palestine Conciliation Commission) estimated property losses at $7.8 billion (1948 value).",
            nakbaText8: "Ongoing displacement: UNRWA registers 5.9 million Palestinian refugees today.",
            downloadTextNakba: "Download full evidence dossier (PDF)",
            nakbaCitation1: "IDF archives; Ben Gurion diary",
            nakbaCitation2: "Morris, Pappé, Shlaim",
            nakbaCitation3: "UN doc A/AC.25/W.81",
            nakbaCitation4: "Zochrot; BADIL",
            related1Nakba: "Absentee Property Law",
            related1DescNakba: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related2Nakba: "Myth: Empty Land",
            related2DescNakba: "Pre-Zionist Palestine was densely inhabited with centuries-old cities.",
            related3Nakba: "No Population Exchange",
            related3DescNakba: "False equivalence: Mizrahi Jews vs. Palestinian refugees.",


            // natural growth page
            // Add to the 'en' section:
            naturalDeepTitle: "'Natural Growth': The State-Subsidized Expansion of Settlements",
            statSubsidy: "Per capita subsidy",
            statLand: "West Bank land allocated",
            statGrowth: "Settler growth rate",
            naturalSection1: "Systematic Financial Incentives",
            naturalText1: "Sikkuy: The Association for Civil Equality (2023): Settler municipalities receive ₪8,500 ($2,300) per capita more than non-settler Israeli cities of similar size – annual subsidy exceeding ₪4 billion.",
            naturalText2: "State Comptroller Report (2021): Ministry of Housing allocated 60% of its West Bank budget to settlements beyond the separation barrier, explicitly to incentivize relocation.",
            naturalText3: "Tax benefits: Settlers receive reduced income tax (5–7% lower), mortgage subsidies up to 40%, and grants for moving to 'national priority' areas – 80% of which are settlements.",
            naturalSection2: "Land Seizure, Not Natural Growth",
            naturalText4: "Peace Now (2023): 50% of West Bank land has been allocated for settlements – 9% built, 41% reserved for future expansion (outdated 'natural growth' justification).",
            naturalText5: "Civil Administration: 2022 saw record 20,000 dunams (5,000 acres) seized for settlement expansion – largest since 1992. Only 0.5% of Palestinian permit applications approved.",
            naturalText6: "Outpost 'legalization': 2023–2024, nine illegal outposts retroactively authorized, 18,000 housing units advanced – all framed as 'responding to natural growth'.",
            naturalSection3: "Demographic Engineering",
            naturalQuote: "B'Tselem (2023): 'The \"natural growth\" argument is a smokescreen. Successive Israeli governments have pursued a deliberate policy of maximizing the settler population to prevent a viable Palestinian state.'",
            naturalText7: "Population target: 1 million settlers by 2030. Current growth rate (4.2% annually) is triple Israel's national average – impossible without massive state intervention.",
            naturalText8: "Yoav Kisch (Housing Minister, 2023): 'We will use every tool to strengthen settlement – not despite international pressure, but because of it.'",
            naturalSection4: "Illegal Under International Law",
            naturalText9: "UN Security Council Resolution 2334 (2016): Settlements have 'no legal validity' and constitute 'flagrant violation' of international law. 'Natural growth' is not an exception.",
            naturalText10: "ICJ 2004 Advisory Opinion: All settlement construction is illegal, regardless of demographic justifications.",
            downloadTextNatural: "Download full evidence dossier (PDF)",
            naturalCitation1: "Sikkuy report 2023",
            naturalCitation2: "State Comptroller 2021",
            naturalCitation3: "Peace Now database 2023",
            naturalCitation4: "UNSC Res 2334; ICJ 2004",
            related1Natural: "Oslo Betrayal",
            related1DescNatural: "Oslo Accords did not freeze settlements — they doubled (1993–2000).",
            related2Natural: "Water Discrimination",
            related2DescNatural: "Settlers consume 4x more water than Palestinians in the West Bank.",
            related3Natural: "Military Justice Apartheid",
            related3DescNatural: "Palestinians in military courts, settlers in civilian courts.",



            // no partner page
            // Add to the 'en' section:
            nopartnerDeepTitle: "The 'No Partner' Myth: Israel's Rejection of Peace Offers",
            statSupport: "Israelis support Arab Peace Initiative",
            statUnits: "Settlement units during Camp David",
            statOlmert: "Olmert's proposed West Bank",
            nopartnerSection1: "Camp David 2000: What Really Happened",
            nopartnerText1: "The myth: 'Arafat rejected Barak's generous offer and walked away, proving there is no partner.' The reality: No formal written offer was ever presented. Israel proposed a non-contiguous Palestinian 'state' on 50–60% of the West Bank, with Israeli control of borders, airspace, water, and the Jordan Valley, and no sovereignty over East Jerusalem.",
            nopartnerText2: "Robert Malley (Clinton's special assistant for Arab-Israeli affairs, 2000): 'The portrayal of Arafat as the intransigent villain and Barak as the bold peacemaker is a caricature. Barak's proposals fell short of Palestinian minimum requirements and were communicated as non-negotiable.'",
            nopartnerText3: "Settlements: During the Camp David talks, Israel continued constructing settlements. In 2000 alone, 4,800 new housing units were tendered in the West Bank.",
            nopartnerSection2: "Clinton Parameters & Taba 2001",
            nopartnerText4: "December 2000: President Clinton presented parameters: Palestinian state on 94–96% of West Bank, land swap of 1–3%, Arab neighborhoods of East Jerusalem under Palestinian sovereignty, Jewish neighborhoods under Israeli sovereignty, and a solution for refugees based on UNGA 194.",
            nopartnerText5: "The Palestinian leadership accepted the Clinton Parameters with some reservations. Israel accepted with 14 reservations that fundamentally altered the proposal – including maintaining control over the Jordan Valley and rejecting refugee return.",
            nopartnerText6: "Taba Summit (January 2001): Israeli and Palestinian negotiators came closer than ever to a final agreement. Negotiations were terminated by Israeli Prime Minister Barak amid his impending electoral defeat.",
            nopartnerSection3: "Arab Peace Initiative (2002)",
            nopartnerText7: "The Arab League unanimously adopted the Saudi-initiated Arab Peace Initiative: full normalization with Israel in exchange for full Israeli withdrawal from territories occupied in 1967, a just solution for Palestinian refugees based on UNGA 194, and a Palestinian state with East Jerusalem as its capital.",
            nopartnerText8: "Israel's official response: Ignored the initiative. Prime Minister Sharon rejected it outright; subsequent governments never formally engaged with it as a basis for negotiation.",
            nopartnerText9: "The initiative was re-endorsed in 2007 and 2017. Polls consistently show 60–70% of Israelis support it, yet Israeli governments have never accepted it.",
            nopartnerSection4: "Olmert Offer (2008)",
            nopartnerQuote: "Prime Minister Ehud Olmert (2008): Proposed Palestinian state on 93% of West Bank, 5.8% land swap, no sovereignty over East Jerusalem's holy basin, no right of return, and Israeli presence in Jordan Valley for 40 years. President Abbas requested clarification on maps and borders; Olmert left office without responding.",
            nopartnerText10: "Abbas responded: 'I said yes immediately, but asked for the maps. Olmert never provided them. The offer disappeared when he resigned.'",
            nopartnerText11: "The narrative that 'Abbas rejected a generous offer' is contradicted by Olmert himself, who later confirmed: 'We didn't reach an agreement. I take full responsibility for not completing it.'",
            nopartnerText12: "Settlements: During Olmert's tenure (2006–2009), settler population increased by 30,000 – the largest growth of any post-Oslo government.",
            nopartnerSection5: "Palestinian Statehood Bid (2011)",
            nopartnerText13: "President Abbas submitted Palestine's application for full UN membership – a non-violent diplomatic initiative for statehood within 1967 borders. The US threatened to veto, and the bid was downgraded to non-member observer state status (2012).",
            nopartnerText14: "Israeli response: Accelerated settlement construction. In the month following the bid, Israel announced 3,000 new housing units in East Jerusalem and the West Bank.",
            nopartnerSection6: "Scholarly Consensus",
            nopartnerText15: "Rashid Khalidi (2020): 'The \"no partner\" myth is the most successful propaganda trope of the Israeli peace process. It shifts blame from the occupier to the occupied, from the party with overwhelming power to the party with none.'",
            nopartnerText16: "Nathan Thrall (2017): 'The claim that Israel has no partner for peace is a self-fulfilling prophecy. By expanding settlements, refusing to negotiate final status issues, and rejecting Arab peace initiatives, Israel ensures there is no partner on its own terms.'",
            nopartnerText17: "Henry Siegman (2007): 'The real obstacle to peace is not the absence of a Palestinian partner, but Israel's unwillingness to end the occupation.'",
            downloadTextNopartner: "Download full evidence dossier (PDF)",
            nopartnerCitation1: "Robert Malley, 'Camp David: The Tragedy of Errors'",
            nopartnerCitation2: "Clinton Parameters 2000; UNGA 194",
            nopartnerCitation3: "Arab Peace Initiative 2002",
            nopartnerCitation4: "Khalidi, Thrall, Siegman",
            related1Nopartner: "Oslo Betrayal",
            related1DescNopartner: "Oslo Accords did not freeze settlements — they doubled (1993–2000).",
            related2Nopartner: "1948 Nakba",
            related2DescNopartner: "The systematic depopulation of over 400 Palestinian towns.",
            related3Nopartner: "2005 Siege, Not Peace",
            related3DescNopartner: "Withdrawal reframed as concession – actually maintained full control.",




            // water discrimination page
            // Add to the 'en' section:
            waterDeepTitle: "Water Apartheid: Systematic Discrimination",
            statSettler: "Settler daily consumption",
            statPalestinian: "Palestinian daily consumption",
            statGaza: "Gaza water undrinkable",
            waterSection1: "Unequal Distribution",
            waterText1: "West Bank: Israeli settlers consume 300 litres per capita/day; Palestinians average 80 litres (WHO minimum is 100 litres).",
            waterText2: "Gaza: 90% of water from aquifer is unfit for drinking; 80% of Gaza population depends on contaminated water.",
            waterText3: "Mekorot (Israeli national water company) supplies 80% of West Bank water to settlements, while restricting Palestinian access.",
            waterSection2: "International Law Violations",
            waterText4: "Geneva Convention IV, Article 53: Prohibits destruction of water infrastructure in occupied territory.",
            waterText5: "Amnesty International 2019: 'Israel's water apartheid denies Palestinians equitable access.'",
            waterText6: "Human Rights Watch 2021: 'Discriminatory water allocation is a key element of apartheid.'",
            waterSection3: "Humanitarian Crisis",
            waterQuote: "80% of Palestinian agricultural land in Jordan Valley is denied irrigation water, destroying livelihoods.",
            waterText7: "World Bank 2022: Water sector losses exceed $1.1 billion annually due to Israeli restrictions.",
            waterText8: "Palestinian communities in Area C: 180,000 people not connected to water network.",
            downloadTextWater: "Download full evidence dossier (PDF)",
            waterCitation1: "B'Tselem 'Parched Sea' 2023",
            waterCitation2: "Amnesty International 2019",
            waterCitation3: "HRW 2021",
            waterCitation4: "World Bank 2022; UN OCHA",
            related1Water: "2005 Siege, Not Peace",
            related1DescWater: "Withdrawal reframed as concession – actually maintained full control.",
            related2Water: "'Natural Growth' Myth",
            related2DescWater: "State-funded incentives and land grabs, not births.",
            related3Water: "Military Justice Apartheid",
            related3DescWater: "Palestinians in military courts, settlers in civilian courts.",



            // weapnize page
            // Add to the 'en' section:
            weaponizeDeepTitle: "Weaponizing Antisemitism: Conflating Criticism with Hatred",
            statIHRA: "IHRA examples relate to Israel",
            statScholars: "Jewish scholars signed JDA",
            statStates: "US states with anti-BDS laws",
            weaponizeSection1: "The IHRA Definition: A Political Tool",
            weaponizeText1: "The International Holocaust Remembrance Alliance (IHRA) working definition of antisemitism (2016) includes 11 examples, seven of which relate to criticism of Israel – including 'claiming that the existence of the State of Israel is a racist endeavor' and 'applying double standards' to Israel.",
            weaponizeText2: "Critics argue the definition conflates antisemitism with legitimate political speech, equating criticism of Israeli policy with hatred of Jews. Human rights organizations warn it has been used to suppress Palestine advocacy.",
            weaponizeText3: "Kenneth Stern, the definition's primary drafter, stated in 2019: 'I am concerned that the definition, which I drafted to help protect Jewish students, is now being used to silence academic freedom and punish advocacy for Palestinian rights.'",
            weaponizeSection2: "Jerusalem Declaration on Antisemitism (2021)",
            weaponizeQuote: "The Jerusalem Declaration on Antisemitism (JDA), signed by over 110 prominent Jewish scholars and 40+ organizations: 'Antisemitism is discrimination, prejudice, hostility or violence against Jews as Jews. ... It is not antisemitic to criticize the actions of the State of Israel, to advocate for boycotts and divestment, or to support Palestinian rights.'",
            weaponizeText4: "Signatories include: Omer Bartov, Alon Confino, Amos Goldberg, Brian Klug, Raz Segal, Judith Butler, and Naomi Chazan – leading voices in Holocaust studies, Jewish history, and human rights.",
            weaponizeText5: "The JDA explicitly distinguishes between antisemitism and legitimate criticism of Israel, including BDS advocacy, affirming that 'criticism of Israel that would be tolerated for any other country cannot be regarded as antisemitic.'",
            weaponizeSection3: "Suppressing Palestine Advocacy",
            weaponizeText6: "Human Rights Watch (2023): 'Discourse on Denial' – Documents how Israel and its allies use antisemitism allegations to delegitimize human rights organizations, including HRW, Amnesty International, and B'Tselem, after they published reports concluding Israel's practices constitute apartheid.",
            weaponizeText7: "Amnesty International (2022): Following its apartheid report, Amnesty faced coordinated campaigns labeling the organization 'antisemitic' – despite its 60-year history of defending Jewish communities and Holocaust education.",
            weaponizeText8: "B'Tselem (2021): After issuing its apartheid report, B'Tselem's staff received death threats, and the Israeli government launched legislation to ban the organization, citing 'delegitimization' and 'antisemitic rhetoric.'",
            weaponizeSection4: "Anti-BDS Laws and Academic Freedom",
            weaponizeText9: "Over 30 US states have enacted anti-BDS laws requiring contractors to certify they are not boycotting Israel. Courts have struck down several as violations of free speech (Arkansas, Arizona, Kansas). The ACLU opposes them as unconstitutional.",
            weaponizeText10: "In the UK, the IHRA definition has been adopted by universities to discipline student activists. A 2022 British Academy report warned it is 'chilling academic freedom' on Palestine scholarship.",
            weaponizeText11: "Germany: The Bundestag passed a 2019 resolution declaring BDS 'antisemitic.' Cultural institutions have cancelled events by Jewish and Israeli critics of Israel, including the Jewish Voice for Just Peace in the Middle East.",
            weaponizeSection5: "Jewish Voices Against Weaponization",
            weaponizeText12: "Jewish Voice for Peace (JVP): 'The weaponization of antisemitism is used to silence Jewish critics of Israel as well as Palestinians and their allies. Real antisemitism is a serious threat; false charges undermine efforts to combat it.'",
            weaponizeText13: "IfNotNow: 'We are American Jews fighting for freedom and dignity for all. Equating our opposition to occupation with antisemitism is a tactic to divide us and protect the status quo.'",
            weaponizeText14: "Peter Beinart (2021): 'The fight against antisemitism is sacred. But using it to shield Israel from criticism desecrates the memory of the Holocaust and betrays the Jewish ethical tradition.'",
            downloadTextWeaponize: "Download full evidence dossier (PDF)",
            weaponizeCitation1: "IHRA definition 2016; JDA 2021",
            weaponizeCitation2: "HRW 'Discourse on Denial' 2023",
            weaponizeCitation3: "British Academy 2022; German Bundestag 2019",
            weaponizeCitation4: "JVP; IfNotNow; Peter Beinart",
            related1Weaponize: "False 'No Partner'",
            related1DescWeaponize: "Narrative that Israel made unprecedented offers – omits continued colonization.",
            related2Weaponize: "Military Justice Apartheid",
            related2DescWeaponize: "Palestinians in military courts, settlers in civilian courts.",
            related3Weaponize: "Heritage Theft",
            related3DescWeaponize: "Excavations erase Palestinian layers, rebrand sites as exclusively Jewish heritage.",



            // no exchange page
            // Add to the 'en' section:
            noexchangeDeepTitle: "False Equivalence: Palestinian Refugees and Mizrahi Jews",
            statPalestinian: "Palestinian refugees (1948)",
            statMizrahi: "Mizrahi immigrants",
            statResolution: "UN Resolution 194",
            noexchangeSection1: "The 'Population Exchange' Myth",
            noexchangeText1: "Israeli propaganda often equates the 1948 Palestinian refugees (750,000–850,000 expelled) with Mizrahi Jews who immigrated to Israel from Arab countries (approx. 850,000 between 1948–1970s), framing it as a 'mutual population exchange'.",
            noexchangeText2: "This equivalence is historically and legally false. Palestinian refugees were forcibly expelled in a planned ethnic cleansing; Mizrahi immigration was encouraged, facilitated, and in many cases orchestrated by Israel.",
            noexchangeText3: "No bilateral agreement, no population transfer treaty, no UN resolution recognizes any 'exchange' – the term itself is a political construct, not a legal reality.",
            noexchangeSection2: "Palestinian Refugees: Forced Expulsion",
            noexchangeText4: "Plan Dalet (March 1948): Zionist leadership adopted a master plan to expel Palestinian civilians from areas designated for the Jewish state. At least 418 villages destroyed, 15 cities depopulated.",
            noexchangeText5: "Massacres (Deir Yassin, Tantura, Lydda): Systematic violence and psychological warfare caused mass flight. Survivors were loaded onto trucks and expelled to the West Bank, Gaza, Jordan, Lebanon, and Syria.",
            noexchangeText6: "UNGA Resolution 194 (1948): Affirms the right of Palestinian refugees 'to return to their homes and live at peace with their neighbors.' This right is individual, permanent, and non-waivable. It has been reaffirmed annually by the UN General Assembly.",
            noexchangeSection3: "Mizrahi Immigration: Encouraged, Not Expelled",
            noexchangeText7: "The Law of Return (1950) granted every Jew worldwide the right to immigrate to Israel and receive immediate citizenship. Mizrahi Jews were actively recruited, airlifted (Operation Ezra and Nehemiah, Operation Magic Carpet), and absorbed by the state.",
            noexchangeText8: "Yehouda Shenhav, 'The Arab Jews' (2006): 'The narrative of Mizrahi refugees was constructed retroactively in the 1990s to counter Palestinian claims. At the time of their arrival, they were not considered refugees by Israel or the UN.'",
            noexchangeText9: "UNHCR: Mizrahi Jews have never been registered as refugees, do not receive UNRWA or UNHCR assistance, and no UN resolution grants them a right of return to countries of origin.",
            noexchangeSection4: "Israeli Role in Mizrahi Immigration",
            noexchangeText10: "Israeli agents operated in Iraq, Morocco, Yemen, and Egypt actively encouraging emigration – sometimes using bombs and intimidation (e.g., 1951 Baghdad bombings, disputed but documented by historians like Naeim Giladi and Abbas Shiblak).",
            noexchangeText11: "Mizrahi immigration served Israel's demographic and labor needs. Between 1948–1951, Israel's Jewish population doubled, largely through Mizrahi and Holocaust survivor immigration.",
            noexchangeText12: "Property of Mizrahi Jews was not confiscated by Israel – unlike Palestinian property which was legally seized under the Absentee Property Law. Some Mizrahi Jews received compensation from Israel, not from Arab states.",
            noexchangeSection5: "Academic Consensus",
            noexchangeQuote: "Ilan Pappé (2022): 'The comparison between Palestinian refugees and Mizrahi Jews is morally and historically bankrupt. One group was ethnically cleansed by Israel; the other was brought to Israel by Israel. Equating them is a deliberate propaganda tool to deny Palestinian rights.'",
            noexchangeText13: "Yehouda Shenhav: 'Zionism needed Jewish immigrants to build the state. The refugee label was applied retroactively as a political counterweight to the Palestinian narrative.'",
            noexchangeText14: "Avi Shlaim (2018): 'There was no population exchange. There was a Palestinian exodus, and separately, an influx of Jews to Israel. Linking them is an exercise in political propaganda, not historical scholarship.'",
            noexchangeText15: "BADIL (2024): 'The \"population exchange\" myth is a deliberate distortion of international law. Palestinian refugee rights are individual, inalienable, and codified in UN resolutions. They cannot be traded or offset.'",
            downloadTextNoexchange: "Download full evidence dossier (PDF)",
            noexchangeCitation1: "Yehouda Shenhav, 'The Arab Jews'",
            noexchangeCitation2: "UNGA Resolution 194",
            noexchangeCitation3: "Law of Return 1950",
            noexchangeCitation4: "Pappé, Shlaim, BADIL",
            related1Noexchange: "1948 Nakba",
            related1DescNoexchange: "The systematic depopulation of over 400 Palestinian towns.",
            related2Noexchange: "Absentee Property Law",
            related2DescNoexchange: "How Israel legalized seizure of Palestinian land using 'present absentees'.",
            related3Noexchange: "Myth: Empty Land",
            related3DescNoexchange: "Pre-Zionist Palestine was densely inhabited with centuries-old cities.",




            // oslo betrayal page
            // Add to the 'en' section:
            osloDeepTitle: "Oslo Accords: The Illusion of Peace",
            statSettlers1993: "Settlers in 1993",
            statSettlers2024: "Settlers in 2024",
            statOutposts: "Illegal outposts since Oslo",
            osloSection1: "Settlement Doubling",
            osloText1: "1993 (Oslo I): 110,000 settlers in West Bank. 2000 (Oslo II era): 198,000 settlers – 80% increase during the 'peace process'.",
            osloText2: "2024: >490,000 settlers in West Bank, plus 230,000 in East Jerusalem. Total >720,000.",
            osloText3: "150+ illegal outposts built since Oslo, many later 'legalized' by Israeli governments.",
            osloSection2: "Structural Asymmetry",
            osloText4: "Oslo divided West Bank into Areas A, B, C. Area C (60% of West Bank) under full Israeli control – settlements expanded exponentially.",
            osloText5: "Palestinian Authority given municipal responsibilities but no sovereignty, no border control, no water rights.",
            osloText6: "Economic Paris Protocol (1994) locked Palestine into customs union with Israel – perpetual dependency.",
            osloSection3: "Critical Scholarship",
            osloQuote: "Edward Said: 'Oslo was an instrument of Palestinian surrender, not a path to statehood.'",
            osloText7: "Nathan Thrall (London Review of Books, 2017): 'Oslo institutionalized the occupation, making it cheaper and more permanent.'",
            osloText8: "Raja Shehadeh: 'Oslo turned the PLO into Israel's subcontractor.'",
            osloText9: "Meron Benvenisti: 'Oslo was a facade for continued colonization.'",
            downloadTextOslo: "Download full evidence dossier (PDF)",
            osloCitation1: "Peace Now settlement database",
            osloCitation2: "B'Tselem 2024",
            osloCitation3: "Edward Said; Nathan Thrall",
            osloCitation4: "Paris Protocol 1994",
            related1Oslo: "'Natural Growth' Myth",
            related1DescOslo: "State-funded incentives and land grabs, not births.",
            related2Oslo: "False 'No Partner'",
            related2DescOslo: "Narrative that Israel made unprecedented offers – omits continued colonization.",
            related3Oslo: "Military Justice Apartheid",
            related3DescOslo: "Palestinians in military courts, settlers in civilian courts."





        },
        ar: {
            // Header
            logo: "كسر الصمت",
            tagline: "حقيقة • قصة • دعم",
            home: "الرئيسية",
            listing: "القائمة",
            about: "حول",
            report: "بلغ",
            reportBtn: "بلغ عن دعاية",
            langBtn: "EN",

            // Search
            search: "ابحث في المقالات...",

            // Hero Section
            heroTitle: "مواجهة الدعاية بالأدلة",
            heroDesc: "تعتمد الدعاية الصهيونية على الأساطير والمحو والتشويه. هذا المشروع يوثق بشكل منهجي المصادر الأولية والسجلات الأرشيفية والنتائج المؤسسية — كل حالة تكشف زيفاً محدداً بأدلة قابلة للتحقق. هدفنا: الحقيقة والمساءلة والعدالة التاريخية.",

            // Importance Cards
            imp1Title: "مصادر أولية",
            imp1Desc: "أرشيف جيش الاحتلال المُفرج عنه، تقارير مراقب الدولة الإسرائيلي، إحصاءات عثمانية وبريطانية — نخرج الوثائق إلى النور.",
            imp2Title: "قانون دولي",
            imp2Desc: "قرارات الأمم المتحدة (١٩٤، ٢٣٣٤)، فتاوى محكمة العدل الدولية، انتهاكات اتفاقية جنيف — أدلة قانونية على التمييز المنهجي.",
            imp3Title: "رصد حقوق الإنسان",
            imp3Desc: "بتسيلم، هيومن رايتس ووتش، العفو الدولية، الميزان، يش دين — تقارير متقاطعة من منظمات إسرائيلية ودولية.",
            imp4Title: "إجماع أكاديمي",
            imp4Desc: "إيلان بابيه، يهودا شينهاف، رشيد خالدي، روبرت مالي، إعلان القدس — دراسات أكاديمية ترفض الصمت.",

            // Featured Articles
            featuredTitle: "مقالات مميزة",
            viewAll: "عرض كل البطاقات",
            featured1Title: "النكبة ١٩٤٨",
            featured1Desc: "خطة دالت، تدمير ٤١٨ قرية، ٧٥٠ ألف لاجئ — التطهير العرقي لفلسطين موثقاً.",
            featured2Title: "التمييز في المياه",
            featured2Desc: "المستوطنون: ٣٠٠ لتر/يوم، الفلسطينيون: ٨٠ لتر. ٩٠٪ من مياه غزة غير صالحة. البنك الدولي، بتسيلم، العفو الدولية.",
            featured3Title: "خيانة أوسلو",
            featured3Desc: "١٩٩٣: ١١٠ آلاف مستوطن ← ٢٠٢٤: ٧٢٠ ألفاً. أكثر من ١٥٠ بؤرة استيطانية. السلام الآن: 'أوسلو أسست الاحتلال.'",

            // CTA Section
            ctaTitle: "١٢ ملف أدلة — على بعد نقرة واحدة",
            ctaDesc: "أبرتهايد القضاء العسكري، أملاك الغائبين، سرقة التراث، حصار غزة، أسطورة 'لا شريك'، والمزيد.",
            ctaBtn: "استكشف كل البطاقات",

            // Footer
            footerText: "© ٢٠٢٦ قصر الصمت — روايات موثقة مضادة. جميع الأدلة متقاطعة المصادر.",
            footerCredits: "تصميم: حقيقة • قصة • دعم",

            // Report Page Translations
            reportTitle: "الإبلاغ عن دعاية",
            reportSubtitle: "ساعدنا في تحديد والتحقق من المعلومات المضللة. بلاغك يساعد في الحفاظ على الحقيقة والدقة.",

            // Steps
            step1Label: "نوع المحتوى",
            step2Label: "التفاصيل",
            step3Label: "الأدلة",
            step4Label: "المراجعة",

            step1Title: "ما نوع المحتوى الذي تبلغ عنه؟",
            step2Title: "قدم تفاصيل عن المحتوى",
            step3Title: "قدم أدلة (اختياري لكن مفيد)",
            step4Title: "راجع بلاغك",

            // Content Types
            contentArticle: "مقال / خبر",
            contentArticleDesc: "مقالات إخبارية كاذبة، عناوين مضللة",
            contentSocial: "منشور على وسائل التواصل",
            contentSocialDesc: "معلومات مضللة على منصات التواصل",
            contentImage: "صورة / ميم",
            contentImageDesc: "صور معدلة أو ميمات مضللة",
            contentVideo: "فيديو",
            contentVideoDesc: "فيديوهات مضللة أو معدلة",
            contentAudio: "صوت / بودكاست",
            contentAudioDesc: "محتوى صوتي مضلل",
            contentOther: "أخرى",
            contentOtherDesc: "أنواع أخرى من الدعاية",

            // Form Labels
            urlLabel: "رابط المحتوى / المصدر *",
            urlPlaceholder: "https://...",
            platformLabel: "المنصة التي رأيت فيها هذا *",
            selectPlatform: "اختر المنصة",
            platformTwitter: "تويتر / X",
            platformFacebook: "فيسبوك",
            platformInstagram: "انستغرام",
            platformTiktok: "تيك توك",
            platformYoutube: "يوتيوب",
            platformTelegram: "تيليغرام",
            platformWhatsapp: "واتساب",
            platformNews: "موقع إخباري",
            platformOther: "أخرى",
            dateLabel: "تاريخ النشر / الاكتشاف *",
            descriptionLabel: "صف المحتوى المضلل *",
            descriptionPlaceholder: "الرجاء وصف ما يجعل هذا المحتوى دعائياً أو مضللاً...",
            harmfulCheck: "هذا المحتوى يروج للكراهية أو العنف أو التمييز",

            // Evidence
            dragDrop: "اسحب وأفلت الملفات هنا أو",
            browse: "تصفح",
            uploadHint: "مدعوم: صور، PDF، لقطات شاشة (الحد الأقصى 10 ميجابايت)",
            additionalLabel: "مصادر / مراجع إضافية",
            additionalPlaceholder: "روابط لفحص الحقائق، أدلة إضافية...",
            emailLabel: "بريدك الإلكتروني (اختياري، للمتابعة)",
            emailPlaceholder: "بريدك@email.com",

            // Review
            reviewContentType: "نوع المحتوى",
            reviewUrl: "رابط المصدر",
            reviewPlatform: "المنصة",
            reviewDate: "التاريخ",
            reviewDescription: "الوصف",
            reviewFiles: "الملفات المرفقة",
            none: "لا يوجد",
            termsText: "أؤكد أن المعلومات المقدمة دقيقة حسب معرفتي",

            // Buttons
            prevBtn: "السابق",
            nextBtn: "الخطوة التالية",
            submitBtn: "إرسال البلاغ",

            // Modal
            modalTitle: "تم إرسال البلاغ بنجاح!",
            modalText: "شكراً لمساعدتك في الحفاظ على الحقيقة والدقة. سيراجع فريقنا بلاغك خلال 24-48 ساعة.",
            reference: "الرقم المرجعي",
            returnHome: "العودة للرئيسية",
            submitAnother: "إرسال بلاغ آخر",

            // About Page
            contact: "اتصل بنا",
            aboutTitle: "عن قصر الصمت",
            aboutSubtitle: "توثيق الحقيقة بالأدلة، مواجهة الدعاية بالحقائق — أرشيف منهجي للمصادر الأولية.",
            mission1Title: "توثيق",
            mission1Text: "نجمع ونحافظ على الأرشيفات المُفرج عنها والتقارير الرسمية والنتائج المؤسسية التي تكشف الدعاية.",
            mission2Title: "تحقق",
            mission2Text: "كل ادعاء متقاطع المصادر مع مصادر متعددة — وثائق أممية، تقارير حقوق إنسان، وبحوث أكاديمية.",
            mission3Title: "كشف",
            mission3Text: "نجعل الأدلة متاحة، مفككين الأساطير من خلال حقائق قابلة للتحقق ووثائق أولية.",
            storyTitle: "قصتنا",
            storyText: "تأسس قصر الصمت عام ٢٠١٩، وانبثق عن مجموعة من الباحثين والمؤرخين والمدافعين عن حقوق الإنسان الذين أدركوا أن الدعاية تزدهر في الظلام. من خلال إلقاء الضوء على المصادر الأولية — من أرشيف جيش الاحتلال المُفرج عنه إلى قرارات الأمم المتحدة ورصد حقوق الإنسان — أنشأنا مستودعاً متاحاً للأدلة. اليوم، يحتوي أرشيفنا على أكثر من ١٠٠٠ مصدر أولي، كل منها يتحدى زيفاً محدداً بوثائق قابلة للتحقق. التزامنا يبقى: الحقيقة والمساءلة والعدالة التاريخية.",
            statEvidence: "ملف أدلة",
            statSources: "مصدر أولي",
            statFounded: "تأسس",
            principlesTitle: "مبادئنا",
            principle1: "بحث قائم على الأدلة فقط",
            principle2: "مصادر متقاطعة",
            principle3: "توثيق أولي",
            principle4: "متاح للجميع",

            // Contact Page
            contactTitle: "تواصل معنا",
            contactSubtitle: "لديك أدلة للمشاركة؟ أسئلة عن أبحاثنا؟ يسعدنا التواصل معك.",
            contactInfo: "معلومات الاتصال",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            office: "المكتب",
            response: "وقت الرد",
            responseText: "نرد عادة خلال ٢٤-٤٨ ساعة. للمواضيع العاجلة، يرجى التحديد في الموضوع.",
            sendMessage: "أرسل رسالة",
            nameLabel: "اسمك",
            namePlaceholder: "محمد أحمد",
            emailLabel: "البريد الإلكتروني",
            emailPlaceholder: "mohamed@example.com",
            subjectLabel: "الموضوع",
            subjectPlaceholder: "تعاون بحثي، تقديم أدلة...",
            messageLabel: "الرسالة",
            messagePlaceholder: "رسالتك هنا...",
            sendBtn: "إرسال الرسالة",
            successMessage: "شكراً! تم إرسال رسالتك. سنرد خلال ٢٤-٤٨ ساعة.",
            privacyNote: "معلوماتك تبقى سرية وتستخدم فقط للرد على استفسارك.",


            //listing page
            // Add to the 'ar' section:
            // Card 1
            card1Title: "النكبة ١٩٤٨",
            card1Desc: "تهجير منهجي لأكثر من ٤٠٠ بلدة فلسطينية، وليس 'هجرًا' أثناء الحرب.",
            card1Evidence: "📌 وثائق أرشيفية",
            card1EvidenceText: "• إيلان بابيه، 'التطهير العرقي في فلسطين' – أرشيف جيش الاحتلال. خطة دالت: تدمير ٤١٨ قرية، ٧٥٠ ألف لاجئ.",
            card1Citation: "زخروت / بيني موريس",

            // Card 2
            card2Title: "تمييز في المياه",
            card2Desc: "الضفة الغربية: المستوطنون يستهلكون ٤ أضعاف الفلسطينيين – غير قانوني دوليًا.",
            card2Evidence: "💧 البنك الدولي / الأمم المتحدة",
            card2EvidenceText: "• الإسرائيليون: ٣٠٠ لتر/يوم، الفلسطينيون: ٨٠ لتر (أدنى من معيار الصحة). ٩٠٪ من مياه غزة غير صالحة. منظمة العفو ٢٠١٩.",
            card2Citation: "بتسيلم 'بحر عطشان' ٢٠٢٣؛ البنك الدولي",

            // Card 3
            card3Title: "خيانة أوسلو",
            card3Desc: "اتفاقات أوسلو لم تجمّد الاستيطان – بل تضاعف (١٩٩٣–٢٠٠٠).",
            card3Evidence: "📈 رصد الاستيطان",
            card3EvidenceText: "• ١٩٩٣: ١١٠ آلاف مستوطن؛ ٢٠٠٠: ١٩٨ آلاف؛ ٢٠٢٣: أكثر من ٤٩٠ ألفاً. أكثر من ١٥٠ بؤرة استيطانية بعد أوسلو.",
            card3Citation: "السلام الآن؛ بتسيلم ٢٠٢٤",

            // Card 4
            card4Title: "أبرتهايد القضاء العسكري",
            card4Desc: "الضفة: فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية – نفس الأرض.",
            card4Evidence: "⚖️ هيومن رايتس ووتش ٢٠٢١",
            card4EvidenceText: "• تقرير 'تجاوز الحد' – فصل عنصري. ٩٩٫٧٪ إدانة للفلسطينيين؛ المستوطنون يحاكمون مدنيًا.",
            card4Citation: "هيومن رايتس ووتش ٢٠٢١؛ يش دين ٢٠٢٢",

            // Card 5
            card5Title: "قانون أملاك الغائبين",
            card5Desc: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين' – من هم داخل البلاد ويُعتبرون غائبين.",
            card5Evidence: "⚖️ دليل قانوني",
            card5EvidenceText: "• قانون أملاك الغائبين ١٩٥٠ – لا يزال ساريًا. ٣٠٪ من أراضي الضفة الغربية ومساحات شاسعة داخل إسرائيل صودرت. • لجنة التوفيق الأممية قدرت ٧٫٨ مليار دولار أصولاً غير منقولة (لاجئو ١٩٤٨ فقط).",
            card5Citation: "بديل؛ وثيقة الأمم المتحدة A/AC.25/W.81",

            // Card 6
            card6Title: "أسطورة: أرض بلا شعب",
            card6Desc: "فلسطين قبل الصهيونية كانت مأهولة بكثافة بمدن عمرها قرون، ثقافة وزراعة.",
            card6Evidence: "🗺️ إحصاء عثماني وبريطاني",
            card6EvidenceText: "• ١٨٨٠: القدس، يافا، نابلس، غزة – أكثر من ٤٥٠ ألف نسمة. • ١٩١٨: عدد السكان ~٧٠٠ ألف عربي، ٥٦ ألف يهودي (تقديرات بريطانية).",
            card6Citation: "جاستن مكارثي، 'سكان فلسطين'",

            // Card 7
            card7Title: "لا تبادل سكاني",
            card7Desc: "معادلة خاطئة: يهود مزراحي مقابل لاجئين فلسطينيين – سياقات قانونية وتاريخية مختلفة.",
            card7Evidence: "📄 سجل الأمم المتحدة والتاريخ",
            card7EvidenceText: "• لاجئو ١٩٤٨: طرد قسري، ولاية الأونروا، حق العودة (قرار ١٩٤). • يهود مزراحي: لا اعتراف أممي كلاجئين، مُنحت لهم الجنسية الإسرائيلية.",
            card7Citation: "يهودا شينهاف، 'اليهود العرب'",

            // Card 8
            card8Title: "سرقة التراث",
            card8Desc: "حفريات تزيل الطبقات الفلسطينية، تعيد تسمية المواقع كتراث يهودي حصري.",
            card8Evidence: "🏺 حالة: مدينة داود / سلوان",
            card8EvidenceText: "• ٨٥٪ من منازل سلوان مهددة من منظمة إيلاد الاستيطانية؛ أنفاق تقوّض أحياء فلسطينية. • قرارات اليونسكو تدين إسرائيل كقوة احتلال تغيّر مواقع القدس.",
            card8Citation: "اليونسكو 39C/49؛ عيمق شافيه",

            // Card 9
            card9Title: "حصار ٢٠٠٥، ليس سلاماً",
            card9Desc: "إعادة تسمية الانسحاب كتنازل – في الحقيقة سيطرة كاملة: الجو، البحر، المياه، سجل السكان.",
            card9Evidence: "🚫 دليل الحصار",
            card9EvidenceText: "• ٢٠٠٥–٢٠٢٤: إسرائيل تسيطر على ١٠٠٪ من مجال غزة الجوي، مياهها الإقليمية، معابرها، وسجل السكان. • 'أرض محتلة بموجب القانون الدولي' – الأمم المتحدة، اللجنة الدولية، مجلس حقوق الإنسان.",
            card9Citation: "اللجنة الدولية؛ الميزان ٢٠٢٤",

            // Card 10
            card10Title: "لا شريك' كاذب'",
            card10Desc: "رواية أن إسرائيل قدمت عروضاً غير مسبوقة – تتجاهل الاستعمار المستمر والشروط غير المتكافئة.",
            card10Evidence: "📋 كامب ديفيد / طابا ٢٠٠٠-٠١",
            card10EvidenceText: "• عرفات قبل معايير كلينتون، إسرائيل أضافت تحفظات، مزيد من الاستيطان. • عرض فلسطيني: حدود ١٩٦٧ مع تبادل أراض، رفضه أولمرت ٢٠٠٨.",
            card10Citation: "روبرت مالي؛ لوموند دبلوماتيك",

            // Card 11
            card11Title: "تسليح معاداة السامية",
            card11Desc: "يتم وصم النقد المشروع لإسرائيل بأنه معاداة للسامية لإسكات المناصرة القائمة على الأدلة.",
            card11Evidence: "🧾 نقد تعريف IHRA",
            card11EvidenceText: "• أكثر من ١١٠ باحث يهودي و ٤٠ منظمة: 'إعلان القدس حول معاداة السامية' (٢٠٢١) يميز بين النقد والتعصب. • استخدام ادعاءات معاداة السامية لقمع حركة المقاطعة (BDS) والمدافعين عن حقوق الإنسان.",
            card11Citation: "JDA؛ هيومن رايتس ووتش 'خطاب الإنكار'",

            // Card 12
            card12Title: "'نمو طبيعي'",
            card12Desc: "أسطورة أن المستوطنات تتوسع فقط بسبب الولادات — حوافز حكومية واستيلاء على الأراضي.",
            card12Evidence: "💰 دعم حكومي إسرائيلي",
            card12EvidenceText: "• ٢٠٢٢: بلديات المستوطنات تتلقى ٢٣٠٠ دولار للفرد أكثر من المدن الإسرائيلية غير الاستيطانية. • ٥٠٪ من أراضي الضفة الغربية مخصصة للمستوطنات، وليس 'نمواً طبيعياً'.",
            card12Citation: "تقرير سيكوي ٢٠٢٣؛ مراقب الدولة ٢٠٢١",

            // Footer and search
            footerNote: "كل ادعاء متقاطع المصادر مع مصادر مؤسسية. اضغط على أي بطاقة لفتح صفحة الأدلة المخصصة.",
            clearSearch: "مسح البحث",
            noResults: "لا توجد مقالات مطابقة",
            tryDifferent: "جرب كلمات مختلفة أو امسح البحث",



            //absentee property law
            // Add to the 'ar' section:
            backToCards: "عودة إلى جميع البطاقات",
            absenteeDeepTitle: "قانون أملاك الغائبين: شرعنة مصادرة الأراضي",
            statDunams: "دونم صودرت",
            statPresentAbsentees: "حاضر غائب",
            statYear: "عام التشريع",
            absenteeSection1: "مفارقة 'الحاضر الغائب'",
            absenteeText1: "يعرف قانون أملاك الغائبين ١٩٥٠ 'الغائب' بأنه أي شخص كان، بين ٢٩ تشرين الثاني ١٩٤٧ و ١ أيلول ١٩٤٨، في أي بلد عربي أو أي منطقة خارج إسرائيل – حتى لو بقي داخل ما أصبح إسرائيل.",
            absenteeText2: "خلق هذا فئة 'الحاضرين الغائبين' – مواطنون فلسطينيون في إسرائيل كانوا حاضرين في البلاد لكنهم يصنفون قانونياً كغائبين، وصودرت ممتلكاتهم.",
            absenteeText3: "حوالي ٣٠٠٠٠–٤٠٠٠٠ 'حاضر غائب' فقدوا أراضيهم – بما في ذلك ٢٥٪ من جميع الأراضي المملوكة للفلسطينيين داخل إسرائيل.",
            absenteeSection2: "نطاق المصادرة",
            absenteeText4: "بحلول ١٩٥٤، سيطر حارس أملاك الغائبين على ٤ ملايين دونم (مليون فدان) – ٤٠٪ من جميع الأراضي المملوكة للفلسطينيين قبل ١٩٤٨.",
            absenteeText5: "لجنة التوفيق الأممية قدرت قيمة الممتلكات غير المنقولة المصادرة من لاجئي ١٩٤٨ بـ ٧٫٨ مليار دولار (قيمة ١٩٤٨) – أكثر من ١٠٠ مليار دولار اليوم.",
            absenteeText6: "تم نقل قرى بأكملها إلى سلطة التطوير ثم إلى الصندوق القومي اليهودي، مما جعلها 'أراضي دولة' غير متاحة للفلسطينيين.",
            absenteeSection3: "التمديد للأراضي المحتلة",
            absenteeText7: "بعد ١٩٦٧، وسعت إسرائيل قانون أملاك الغائبين ليشمل القدس الشرقية والضفة الغربية عبر الأمرين العسكريين ٥٨ و ٥٩.",
            absenteeText8: "في القدس الشرقية، صودر أكثر من ٨٠٠٠ دونم (٢٠٠٠ فدان) من الأراضي الفلسطينية بموجب هذا القانون، ونقلت إلى سلطة أراضي إسرائيل للاستيطان اليهودي.",
            absenteeText9: "بديل (٢٠٢٣): ٣٠٪ من أراضي الضفة الغربية مصنفة رسمياً كـ 'أملاك غائبين'، الكثير منها مخصص للمستوطنات.",
            absenteeSection4: "نقد قانوني",
            absenteeQuote: "عدالة (المركز القانوني لحقوق الأقلية العربية): 'قانون أملاك الغائبين هو حجر الزاوية في نظام مصادرة الأراضي الإسرائيلي. لا يزال ساري المفعول، ويمنع المواطنين الفلسطينيين من استعادة ممتلكاتهم – حتى عندما لم يغادروا أبداً.'",
            absenteeText10: "لجنة حقوق الإنسان التابعة للأمم المتحدة (٢٠٢٢): دعت مراراً إلى إلغاء قانون أملاك الغائبين باعتباره تمييزياً ومخالفاً للقانون الدولي.",
            absenteeText11: "يمنع القانون اللاجئين الفلسطينيين الداخليين (الحاضرين الغائبين) من العودة إلى قراهم، مثل صفورية، البروة، وإقرت.",
            downloadText: "تحميل ملف الأدلة الكامل (PDF)",
            downloadBtn: "تحميل",
            absenteeCitation1: "بديل ٢٠٢٣؛ وثيقة لجنة التوفيق الأممية A/AC.25/W.81",
            absenteeCitation2: "تقارير عدالة القانونية؛ لجنة حقوق الإنسان الأممية ٢٠٢٢",
            absenteeCitation3: "الأمران العسكريان ٥٨ و ٥٩",
            relatedCards: "بطاقات أدلة ذات صلة",
            related1: "أسطورة: أرض بلا شعب",
            related1Desc: "فلسطين قبل الصهيونية كانت مأهولة بكثافة بمدن عمرها قرون.",
            related2: "النكبة ١٩٤٨",
            related2Desc: "تهجير منهجي لأكثر من ٤٠٠ بلدة فلسطينية.",
            related3: "لا تبادل سكاني",
            related3Desc: "معادلة خاطئة: يهود مزراحي مقابل لاجئين فلسطينيين.",

            //empty land page
            // Add to the 'ar' section:
            emptylandDeepTitle: "'أرض بلا شعب': الواقع الديموغرافي لفلسطين",
            stat1878: "عدد السكان ١٨٧٨",
            stat1918: "عدد السكان ١٩١٨",
            statVillages: "قرية",
            emptylandSection1: "أصول الشعار",
            emptylandText1: "عبارة 'أرض بلا شعب لشعب بلا أرض' استخدمت أول مرة عام ١٨٤٣ من قبل اللورد شافتسبري، عقوداً قبل الصهيونية السياسية – ولم تكن تشير إلى فلسطين بل إلى الأرجنتين.",
            emptylandText2: "ثيودور هرتزل نفسه لم يستخدم العبارة. في 'التل القديم الجديد' (١٩٠٢)، وصف فلسطين بأنها مأهولة بعرب 'بؤساء متخلفين' تخيل أنهم سيستفيدون من الصهيونية.",
            emptylandText3: "إسرائيل زانغويل روّج للشعار بعد زيارة فلسطين عام ١٨٩٧، معترفاً لاحقاً: 'لقد خُدعنا... فلسطين لها سكانها.'",
            emptylandSection2: "سجلات الإحصاء العثماني والبريطاني",
            emptylandText4: "الإحصاء العثماني ١٨٧٨: عدد سكان فلسطين حوالي ٤٥٠ ألف – ٨٧٪ مسلمون، ١٠٪ مسيحيون، ٣٪ يهود. القدس: ٣٠ ألف نسمة، يافا: ١٧ ألفاً، نابلس: ٢٥ ألفاً، غزة: ١٩ ألفاً.",
            emptylandText5: "الإحصاء العسكري البريطاني ١٩١٨: ٧٠٠ ألف عربي، ٥٦ ألف يهودي. السكان العرب متركزون في أكثر من ٨٠٠ قرية وعشرات المدن والبلدات.",
            emptylandText6: "إحصاء الانتداب البريطاني ١٩٢٢: ٧٥٧١٨٢ نسمة – ٧٨٪ مسلمون، ١١٪ يهود، ٩٫٦٪ مسيحيون، ١٫٤٪ آخرون.",
            emptylandSection3: "مراكز حضرية وزراعة",
            emptylandText7: "بحلول أواخر العهد العثماني، كان لفلسطين مراكز حضرية كبرى: القدس (٥٠ ألفاً)، يافا (٤٠ ألفاً)، غزة (٣٥ ألفاً)، الخليل (٢٥ ألفاً)، نابلس (٢٥ ألفاً)، الناصرة (١٢ ألفاً)، عكا (١١ ألفاً)، صفد (١٠ آلاف)، طبريا (٧ آلاف).",
            emptylandText8: "الزراعة الفلسطينية صدرت الحمضيات، زيت الزيتون، الحبوب، والصابون عالمياً. برتقال يافا فاز بجوائز دولية في معرض باريس ١٨٨٠.",
            emptylandText9: "أكثر من ٨٠٠ قرية كانت قائمة، لكل منها بساتين زيتون عمرها قرون، مصاطب، أنظمة مياه، ومؤسسات مجتمعية.",
            emptylandSection4: "الإجماع الأكاديمي",
            emptylandQuote: "جاستن مكارثي، 'سكان فلسطين' (١٩٩٠): 'أسطورة أن فلسطين كانت أرضاً خالية تنتظر الاستيطان اليهودي هي خاطئة بشكل واضح. السجلات الديموغرافية الواسعة تثبت وجود مجتمع أصلي كبير وراسخ ومتطور.'",
            emptylandText10: "رشيد خالدي (٢٠٢٠): 'أسطورة \"الأرض الخالية\" خدمت محو وجود الشعب الفلسطيني وتبرير نزع ملكيته. لا أساس لها في الحقيقة التاريخية.'",
            emptylandText11: "إيلان بابيه (٢٠٠٦): 'الادعاء بأن فلسطين كانت خالية كان شرطاً مسبقاً ضرورياً للتطهير العرقي عام ١٩٤٨. لا يمكنك تطهير أرض تعترف بأنها مأهولة.'",
            emptylandText12: "سلمان أبو ستة (٢٠٢٢): 'الأسطورة مستمرة رغم الأدلة الساحقة لأنها تخدم المشروع الاستعماري الصهيوني المستمر.'",
            downloadTextEmpty: "تحميل ملف الأدلة الكامل (PDF)",
            emptylandCitation1: "جاستن مكارثي، 'سكان فلسطين'",
            emptylandCitation2: "الأرشيف العثماني؛ إحصاءات الانتداب البريطاني ١٩٢٢، ١٩٣١",
            emptylandCitation3: "رشيد خالدي؛ إيلان بابيه؛ سلمان أبو ستة",
            related1Empty: "قانون أملاك الغائبين",
            related1DescEmpty: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related2Empty: "النكبة ١٩٤٨",
            related2DescEmpty: "تهجير منهجي لأكثر من ٤٠٠ بلدة فلسطينية.",
            related3Empty: "لا تبادل سكاني",
            related3DescEmpty: "معادلة خاطئة: يهود مزراحي مقابل لاجئين فلسطينيين.",



            //gaza siege page
            // Add to the 'ar' section:
            siegeDeepTitle: "غزة 'فك الارتباط': من احتلال إلى حصار",
            statPopulation: "سكان تحت الحصار",
            statAid: "يعتمدون على المساعدات",
            statYearSiege: "'فك الارتباط'",
            siegeSection1: "خدعة 'فك الارتباط'",
            siegeText1: "في آب ٢٠٠٥، أجلت إسرائيل ٨٠٠٠ مستوطن من ٢١ مستوطنة في غزة. لم تُنقل الأرض إلى السيادة الفلسطينية – احتفظت إسرائيل بـ 'السيطرة الأمنية' على جميع نقاط الدخول والمجال الجوي والبحر.",
            siegeText2: "دوف فايسبلاس، رئيس مكتب آرييل شارون، اعترف: 'فك الارتباط يزود الكمية اللازمة من الفورمالديهايد بحيث لا تكون هناك عملية سياسية مع الفلسطينيين.'",
            siegeText3: "٢٠٠٦: صنفت إسرائيل غزة 'إقليماً معادياً' وفرضت حصاراً برياً وجوياً وبحرياً كاملاً – عقاب جماعي غير قانوني بموجب القانون الدولي.",
            siegeSection2: "سيطرة بلا وجود",
            siegeText4: "المجال الجوي: إسرائيل تسيطر على مجال غزة الجوي، بما في ذلك طائرات بدون طيار للمراقبة ٢٤/٧. لا يمكن لأي طائرة الدخول أو المغادرة دون إذن إسرائيلي.",
            siegeText5: "المياه الإقليمية: إسرائيل تفرض حد صيد بطول ٣ أميال بحرية (مخفض من ٢٠ ميلاً عام ٢٠٠٠). يتم إطلاق النار على الصيادين ومصادرة القوارب يومياً.",
            siegeText6: "سجل السكان: إسرائيل تسيطر على سجل السكان الفلسطيني. لا يستطيع فلسطينيو غزة تغيير العنوان، الزواج، الدراسة في الخارج، أو العودة دون موافقة إسرائيلية.",
            siegeText7: "المعابر: جميع المعابر البرية الستة تسيطر عليها إسرائيل (معبر رفح تحت إشراف مصري جزئي، لكن إسرائيل تتحكم بقاعدة البيانات البيومترية ودخول البضائع).",
            siegeSection3: "محتلة بموجب القانون الدولي",
            siegeQuote: "اللجنة الدولية للصليب الأحمر ٢٠٢٣: 'غزة لا تزال أرضاً محتلة بموجب القانون الإنساني الدولي. تواصل إسرائيل ممارسة السيطرة الفعلية على جوانب رئيسية من الحياة اليومية وحدود الإقليم ومجالها الجوي وبحرها.'",
            siegeText8: "مجلس حقوق الإنسان التابع للأمم المتحدة (٢٠٢٣): 'تصنيف إسرائيل لغزة كـ \"كيان معاد\" لا يغير وضعها القانوني كأرض محتلة. الحصار هو عقاب جماعي، انتهاك خطير لاتفاقية جنيف الرابعة.'",
            siegeText9: "منظمة العفو الدولية (٢٠٢٤): 'الحصار خلق أكبر سجن مفتوح في العالم. إنه شكل من أشكال الفصل العنصري ويجب إنهاؤه فوراً.'",
            siegeText10: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية: ٢٠٢٤ – ٢٫٣ مليون فلسطيني في غزة تحت الحصار، ٨٠٪ يعتمدون على المساعدات الدولية، ٩٦٪ من المياه غير صالحة للشرب.",
            siegeSection4: "كارثة إنسانية",
            siegeText11: "البنك الدولي ٢٠٢٣: اقتصاد غزة في انهيار – بطالة ٧٠٪، معدل فقر ٨٠٪، ٦٢٪ من السكان يعانون من انعدام الأمن الغذائي.",
            siegeText12: "منظمة الصحة العالمية ٢٠٢٤: ٥٠٪ من الأدوية الأساسية في مستوى 'صفر مخزون'. انقطاع الكهرباء ١٢–١٦ ساعة يومياً. ٩٠٪ من مياه الخزان الجوفي غير صالحة للشرب.",
            siegeText13: "الميزان (٢٠٢٤): منذ ٢٠٠٥، قُتل أكثر من ٦٠٠٠ فلسطيني في غزة على يد القوات الإسرائيلية، من بينهم ١٥٠٠ طفل. ٢٥٠٠٠ جريح. ٢٠٠٠٠ منزل دمر.",
            downloadTextSiege: "تحميل ملف الأدلة الكامل (PDF)",
            siegeCitation1: "اللجنة الدولية ٢٠٢٣؛ مجلس حقوق الإنسان ٢٠٢٣",
            siegeCitation2: "منظمة العفو الدولية ٢٠٢٤؛ مكتب تنسيق الشؤون الإنسانية",
            siegeCitation3: "البنك الدولي ٢٠٢٣؛ منظمة الصحة العالمية ٢٠٢٤؛ الميزان ٢٠٢٤",
            related1Siege: "قانون أملاك الغائبين",
            related1DescSiege: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related2Siege: "التمييز في المياه",
            related2DescSiege: "المستوطنون يستهلكون ٤ أضعاف المياه أكثر من الفلسطينيين في الضفة الغربية.",
            related3Siege: "لا شريك' كاذب'",
            related3DescSiege: "رواية أن إسرائيل قدمت عروضاً غير مسبوقة – تتجاهل الاستعمار المستمر.",

            // heritage theft page
            // Add to the 'ar' section:
            heritageDeepTitle: "محو فلسطين: سرقة التراث الثقافي",
            statSilwan: "منازل سلوان المهددة",
            statArtifacts: "قطعة أثرية منقولة",
            statUnesco: "قرارات اليونسكو",
            heritageSection1: "مدينة داود / سلوان",
            heritageText1: "سلوان هو حي فلسطيني يقطنه ٥٠٠٠٠ نسمة، مبني على مصاطب عمرها قرون تطل على الأقصى. منذ ١٩٩١، استولت منظمة إيلاد الاستيطانية على ٨٥٪ من المنازل في 'قلب' القرية، وتدير أنفاقاً أثرية تحتها.",
            heritageText2: "عيمق شافيه (٢٠٢٣): 'الأنفاق تمحو التاريخ الفلسطيني، وتقدم سلوان حصرياً كـ 'مدينة داود' – تراث توراتي، متجاهلة ١٤٠٠ عام من الوجود الإسلامي والمسيحي. علم الآثار مسيّس لتبرير التهجير.'",
            heritageText3: "اللجنة الإسرائيلية لمنع هدم البيوت: أكثر من ١٠٠٠ أمر هدم صدر في سلوان منذ ٢٠٠٤؛ ١٥٠ منزلاً هُدمت. تسببت حفريات الأنفاق في انهيار هيكلي لعشرات المنازل الفلسطينية.",
            heritageSection2: "اليونسكو: قوة احتلال",
            heritageQuote: "قرار اليونسكو 39C/49 (٢٠١٦): 'يدين السلطة القائمة بالاحتلال لحفرياتها المستمرة، أنفاقها، وأعمالها الأحادية في القدس الشرقية، وهي غير قانونية بموجب القانون الدولي وتغير النسيج التاريخي وسلامة المدينة المقدسة.'",
            heritageText4: "اليونسكو 40C/23 (٢٠١٧): تؤكد أن القدس الشرقية أرض محتلة؛ تدعو إسرائيل إلى وقف الحفريات، احترام الوضع الراهن للأماكن المقدسة، والاعتراف بالوصاية الأردنية.",
            heritageText5: "اليونسكو ٢٠٢٢: 'حفريات باب المغاربة، نفق عين جيحون، ومجمع مركز كيدم تشكل جميعها انتهاكات لاتفاقية لاهاي لعام ١٩٥٤ لحماية الممتلكات الثقافية في حالة نزاع مسلح.'",
            heritageSection3: "إعادة تسمية منهجية",
            heritageText6: "الخليل: الحرم الإبراهيمي / المغارة – موقع تراث عالمي لليونسكو. منذ ١٩٦٧، قسمت إسرائيل الموقع تدريجياً، فرضت أوقات صلاة للمستوطنين فقط، وأعادت تسمية اللافتات لتبرز السردية اليهودية حصرياً.",
            heritageText7: "الأقصى / جبل الهيكل: إسرائيل تقيد وصول الفلسطينيين، تسمح بجولات المستوطنين تحت حراسة مسلحة، وتحفر تحت المسجد (أنفاق حائط البراق) مسببة أضراراً هيكلية.",
            heritageText8: "بيسان، سبسطية، أريحا: السلطات الإسرائيلية تستبدل أسماء الشوارع العربية، تحذف التاريخ الإسلامي والمسيحي من اللافتات السياحية، تقدم المواقع كتراث يهودي قديم حصري.",
            heritageSection4: "نهب وتجارة الآثار",
            heritageText9: "عيمق شافيه (٢٠٢٤): 'منذ ١٩٦٧، تم نقل حوالي ١٠٠٠٠٠ قطعة أثرية من الأراضي الفلسطينية المحتلة ودمجها في المجموعات الوطنية الإسرائيلية، دون موافقة فلسطينية أو رقابة دولية.'",
            heritageText10: "قانون الآثار (١٩٧٨): جميع 'الآثار' الموجودة في الضفة الغربية بعد ١٩٦٧ تُعلن ملكية دولة إسرائيلية. يُمنع المنقبون الفلسطينيون؛ تُمنح تصاريح الحفر للمستوطنين بشكل روتيني.",
            heritageText11: "متحف إسرائيل، متحف بلاد الكتاب المقدس: يعرضان قطعاً أثرية من سبسطية، أريحا، وهيروديون مصنفة 'إسرائيل'، 'يهودا والسامرة' – محو المصدر الفلسطيني.",
            heritageSection5: "مقاومة ثقافية فلسطينية",
            heritageText12: "المتحف الفلسطيني (بيرزيت): تأسس ٢٠١٦ للحفاظ على التراث الفلسطيني وروايته من الداخل. يواجه قيود سفر إسرائيلية متكررة على الموظفين وأشياء الإعارة الدولية.",
            heritageText13: "عضوية 'دولة فلسطين' في اليونسكو (٢٠١١): انضمت فلسطين إلى اتفاقية التراث العالمي. تم تسجيل موقعين (المهد: كنيسة المهد، ٢٠١٢؛ أريحا القديمة، ٢٠٢٣) – أدانت إسرائيل كلا التسجيلين.",
            downloadTextHeritage: "تحميل ملف الأدلة الكامل (PDF)",
            heritageCitation1: "قرارات اليونسكو 39C/49، 40C/23",
            heritageCitation2: "تقارير عيمق شافيه ٢٠٢٣–٢٠٢٤",
            heritageCitation3: "قانون الآثار الإسرائيلي ١٩٧٨",
            heritageCitation4: "المتحف الفلسطيني؛ إيكوموس",
            related1Heritage: "قانون أملاك الغائبين",
            related1DescHeritage: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related2Heritage: "أسطورة: أرض بلا شعب",
            related2DescHeritage: "فلسطين قبل الصهيونية كانت مأهولة بكثافة بمدن عمرها قرون.",
            related3Heritage: "النكبة ١٩٤٨",
            related3DescHeritage: "تهجير منهجي لأكثر من ٤٠٠ بلدة فلسطينية.",



            // military justice page
            // Add to the 'ar' section:
            militaryDeepTitle: "عدالة مزدوجة: محاكم عسكرية للفلسطينيين، محاكم مدنية للمستوطنين",
            statConviction: "معدل إدانة الفلسطينيين",
            statPlea: "معدل صفقات الاعتراف",
            statAge: "سن الاختصاص القضائي للمحاكم العسكرية",
            militarySection1: "نظام قانوني مزدوج",
            militaryText1: "يُحاكم الفلسطينيون في الضفة الغربية (بما فيها القدس الشرقية) في محاكم عسكرية إسرائيلية بموجب أوامر عسكرية – أكثر من ١٠٠٠ أمر، كثير منها يعود لعام ١٩٦٧.",
            militaryText2: "المستوطنون الإسرائيليون في نفس المنطقة يُحاكمون في محاكم إسرائيلية مدنية (الصلح، المركزية، العليا).",
            militaryText3: "القدس الشرقية: الفلسطينيون أصحاب 'الإقامة الدائمة' يمثلون أمام محاكم عسكرية بتهم أمنية، المستوطنون أمام قانون مدني.",
            militarySection2: "معدلات الإدانة والمحاكمة العادلة",
            militaryText4: "يش دين (٢٠٢٢): ٩٩٫٧٤٪ من قضايا الفلسطينيين في المحاكم العسكرية تنتهي بالإدانة – معدل صفقات الاعتراف ٩٥٪.",
            militaryText5: "معدل الاحتجاز قبل المحاكمة: الفلسطينيون ١٢–١٨ شهراً؛ المستوطنون المتهمون بجرائم مماثلة يُفرج عنهم بكفالة.",
            militaryText6: "الجلسات تترجم للعبرية، وليس العربية؛ الفلسطينيون يحتاجون مترجم، نادراً ما يُوفَّر بفعالية.",
            militarySection3: "القانون الدولي: فصل عنصري",
            militaryQuote: "هيومن رايتس ووتش (٢٠٢١): 'إبقاء إسرائيل على نظامين قانونيين منفصلين للفلسطينيين والإسرائيليين في نفس المنطقة يشكل جريمة الفصل العنصري.'",
            militaryText7: "منظمة العفو الدولية ٢٠٢٢: 'المحاكم العسكرية تحرم الفلسطينيين من الحق في محاكمة عادلة – تمييز مؤسسي.'",
            militaryText8: "مقرر الأمم المتحدة الخاص ٢٠٢٣: 'النظام القانوني المزدوج هو ركيزة من ركائز الفصل العنصري الإسرائيلي.'",
            militaryText9: "بتسيلم ٢٠٢١: 'أنظمة قانونية منفصلة، طرق منفصلة، حقوق منفصلة – تعريف نظام الفصل العنصري.'",
            militarySection4: "الأطفال في المحاكم العسكرية",
            militaryText10: "إسرائيل هي الدولة الوحيدة في العالم التي تحاكم الأطفال (١٢+) تلقائياً في محاكم عسكرية.",
            militaryText11: "اليونيسف: ٥٠٠-٧٠٠ طفل فلسطيني يُحاكم سنوياً؛ ٧٠٪ يبلغون عن عنف جسدي أثناء الاعتقال.",
            militaryText12: "الأمر العسكري ١٦٥١ (٢٠٠٩) خفض سن المسؤولية الجنائية من ١٤ إلى ١٢ سنة للفلسطينيين فقط.",
            downloadTextMilitary: "تحميل ملف الأدلة الكامل (PDF)",
            militaryCitation1: "هيومن رايتس ووتش 'تجاوز الحد' ٢٠٢١",
            militaryCitation2: "يش دين ٢٠٢٢؛ بتسيلم ٢٠٢١",
            militaryCitation3: "اليونيسف؛ الأمر العسكري ١٦٥١",
            militaryCitation4: "مقرر الأمم المتحدة الخاص ٢٠٢٣",
            related1Military: "قانون أملاك الغائبين",
            related1DescMilitary: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related2Military: "التمييز في المياه",
            related2DescMilitary: "المستوطنون يستهلكون ٤ أضعاف المياه أكثر من الفلسطينيين في الضفة الغربية.",
            related3Military: "خيانة أوسلو",
            related3DescMilitary: "اتفاقات أوسلو لم تجمّد الاستيطان – بل تضاعف.",



            //nakba page
            // Add to the 'ar' section:
            nakbaDeepTitle: "النكبة ١٩٤٨: التطهير العرقي لفلسطين",
            statVillages: "قرية دمرت",
            statRefugees: "لاجئ (١٩٤٨)",
            statPopulation: "من السكان العرب شردوا",
            nakbaSection1: "نظرة تاريخية",
            nakbaText1: "اعتمدت 'خطة دالت' في آذار ١٩٤٨ من قبل القيادة الصهيونية لطرد المدنيين الفلسطينيين واحتلال المناطق ذات الأغلبية العربية.",
            nakbaText2: "دُمّر أكثر من ٤١٨ قرية؛ تم تهجير سكان ١٥ مدينة وبلدة. أصبح ما لا يقل عن ٧٥٠ ألف فلسطيني لاجئين – ٨٠٪ من السكان العرب.",
            nakbaText3: "مجازر مثل دير ياسين (نيسان ١٩٤٨) سببت نزوحًا جماعيًا وهلعًا.",
            nakbaSection2: "التأريخ الإسرائيلي التنقيحي",
            nakbaText4: "بيني موريس (مشكلة اللاجئين الفلسطينيين، ١٩٨٧): وثائق جيش الاحتلال المؤرشفة أكدت عمليات الطرد والفظائع.",
            nakbaText5: "إيلان بابيه: 'التطهير العرقي في فلسطين' (٢٠٠٦) – يقدم خرائط وأوامر وشهادات تثبت التطهير المنهجي.",
            nakbaText6: "آفي شلايم: 'تواطؤ عبر الأردن' – كشف التعاون مع شرق الأردن لتقسيم فلسطين.",
            nakbaSection3: "اعتراف الأمم المتحدة وحق العودة",
            nakbaQuote: "قرار الجمعية العامة للأمم المتحدة ١٩٤ (١٩٤٨) يقر بحق اللاجئين الفلسطينيين في العودة إلى ديارهم وممتلكاتهم.",
            nakbaText7: "لجنة التوفيق الأممية قدرت خسائر الممتلكات بـ ٧٫٨ مليار دولار (قيمة ١٩٤٨).",
            nakbaText8: "تهجير مستمر: الأونروا تسجل ٥٫٩ مليون لاجئ فلسطيني اليوم.",
            downloadTextNakba: "تحميل ملف الأدلة الكامل (PDF)",
            nakbaCitation1: "أرشيف جيش الاحتلال؛ مذكرات بن غوريون",
            nakbaCitation2: "موريس، بابيه، شلايم",
            nakbaCitation3: "وثيقة الأمم المتحدة A/AC.25/W.81",
            nakbaCitation4: "زخروت؛ بديل",
            related1Nakba: "قانون أملاك الغائبين",
            related1DescNakba: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related2Nakba: "أسطورة: أرض بلا شعب",
            related2DescNakba: "فلسطين قبل الصهيونية كانت مأهولة بكثافة بمدن عمرها قرون.",
            related3Nakba: "لا تبادل سكاني",
            related3DescNakba: "معادلة خاطئة: يهود مزراحي مقابل لاجئين فلسطينيين.",


            // natural growth page
            // Add to the 'ar' section:
            naturalDeepTitle: "'نمو طبيعي': التوسع الاستيطاني المدعوم حكومياً",
            statSubsidy: "دعم للفرد",
            statLand: "أراضي الضفة المخصصة",
            statGrowth: "معدل نمو المستوطنين",
            naturalSection1: "حوافز مالية منهجية",
            naturalText1: "سيكوي - جمعية المساواة المدنية (٢٠٢٣): بلديات المستوطنات تتلقى ٨٥٠٠ شيكل (٢٣٠٠ دولار) للفرد أكثر من المدن الإسرائيلية غير الاستيطانية ذات الحجم المماثل – دعم سنوي يتجاوز ٤ مليارات شيكل.",
            naturalText2: "تقرير مراقب الدولة (٢٠٢١): وزارة الإسكان خصصت ٦٠٪ من ميزانيتها في الضفة الغربية للمستوطنات الواقعة خلف جدار الفصل، بهدف تحفيز الانتقال صراحة.",
            naturalText3: "مزايا ضريبية: المستوطنون يحصلون على تخفيض ضريبة الدخل (٥–٧٪)، دعم رهن عقاري حتى ٤٠٪، ومنح للانتقال إلى مناطق 'أولوية وطنية' – ٨٠٪ منها مستوطنات.",
            naturalSection2: "مصادرة أراضٍ، وليس نمواً طبيعياً",
            naturalText4: "السلام الآن (٢٠٢٣): ٥٠٪ من أراضي الضفة الغربية خصصت للمستوطنات – ٩٪ مبني، ٤١٪ محجوز للتوسع المستقبلي (بذريعة 'النمو الطبيعي' البالية).",
            naturalText5: "الإدارة المدنية: ٢٠٢٢ شهد مصادرة قياسية بلغت ٢٠ ألف دونم (٥٠٠٠ فدان) لتوسيع المستوطنات – الأكبر منذ ١٩٩٢. تمت الموافقة على ٠٫٥٪ فقط من طلبات تراخيص الفلسطينيين.",
            naturalText6: "'شرعنة' البؤر الاستيطانية: ٢٠٢٣–٢٠٢٤، تمت شرعنة تسع بؤر استيطانية غير قانونية بأثر رجعي، والدفع بـ ١٨ ألف وحدة سكنية – كلها بذريعة 'الاستجابة للنمو الطبيعي'.",
            naturalSection3: "هندسة ديموغرافية",
            naturalQuote: "بتسيلم (٢٠٢٣): 'حجة \"النمو الطبيعي\" هي ستار دخان. اتبعت الحكومات الإسرائيلية المتعاقبة سياسة متعمدة لتعظيم عدد المستوطنين لمنع قيام دولة فلسطينية قابلة للحياة.'",
            naturalText7: "هدف سكاني: مليون مستوطن بحلول ٢٠٣٠. معدل النمو الحالي (٤٫٢٪ سنوياً) هو ثلاثة أضعاف المتوسط الوطني الإسرائيلي – مستحيل دون تدخل حكومي هائل.",
            naturalText8: "يوآف كيش (وزير الإسكان، ٢٠٢٣): 'سنستخدم كل أداة لتعزيز الاستيطان – ليس رغم الضغط الدولي، بل بسببه.'",
            naturalSection4: "غير قانوني بموجب القانون الدولي",
            naturalText9: "قرار مجلس الأمن ٢٣٣٤ (٢٠١٦): المستوطنات 'ليس لها شرعية قانونية' وتشكل 'انتهاكاً صارخاً' للقانون الدولي. 'النمو الطبيعي' ليس استثناءً.",
            naturalText10: "فتوى محكمة العدل الدولية ٢٠٠٤: جميع بناء المستوطنات غير قانوني، بغض النظر عن المبررات الديموغرافية.",
            downloadTextNatural: "تحميل ملف الأدلة الكامل (PDF)",
            naturalCitation1: "تقرير سيكوي ٢٠٢٣",
            naturalCitation2: "مراقب الدولة ٢٠٢١",
            naturalCitation3: "قاعدة بيانات السلام الآن ٢٠٢٣",
            naturalCitation4: "قرار مجلس الأمن ٢٣٣٤؛ محكمة العدل الدولية ٢٠٠٤",
            related1Natural: "خيانة أوسلو",
            related1DescNatural: "اتفاقات أوسلو لم تجمّد الاستيطان – بل تضاعف (١٩٩٣–٢٠٠٠).",
            related2Natural: "التمييز في المياه",
            related2DescNatural: "المستوطنون يستهلكون ٤ أضعاف المياه أكثر من الفلسطينيين في الضفة الغربية.",
            related3Natural: "أبرتهايد القضاء العسكري",
            related3DescNatural: "فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية.",




            // no partner page
            // Add to the 'ar' section:
            nopartnerDeepTitle: "أسطورة 'لا شريك': رفض إسرائيل لعروض السلام",
            statSupport: "الإسرائيليون يدعمون مبادرة السلام العربية",
            statUnits: "وحدة استيطانية خلال كامب ديفيد",
            statOlmert: "نسبة الضفة في عرض أولمرت",
            nopartnerSection1: "كامب ديفيد ٢٠٠٠: ما حدث حقاً",
            nopartnerText1: "الأسطورة: 'عرفات رفض عرض باراك السخي وانسحب، مما يثبت عدم وجود شريك.' الواقع: لم يُقدم أي عرض رسمي مكتوب على الإطلاق. اقترحت إسرائيل 'دولة' فلسطينية غير متصلة على ٥٠–٦٠٪ من الضفة الغربية، مع سيطرة إسرائيلية على الحدود، المجال الجوي، المياه، وغور الأردن، ولا سيادة على القدس الشرقية.",
            nopartnerText2: "روبرت مالي (مساعد كلينتون الخاص للشؤون العربية الإسرائيلية، ٢٠٠٠): 'تصوير عرفات كشرير متعنت وباراك كصانع سلام جريء هو رسم كاريكاتوري. مقترحات باراك كانت أقل من الحد الأدنى من المتطلبات الفلسطينية وتم إبلاغها على أنها غير قابلة للتفاوض.'",
            nopartnerText3: "المستوطنات: خلال محادثات كامب ديفيد، واصلت إسرائيل بناء المستوطنات. في عام ٢٠٠٠ وحده، تم طرح ٤٨٠٠ وحدة سكنية جديدة في الضفة الغربية.",
            nopartnerSection2: "معايير كلينتون وطابا ٢٠٠١",
            nopartnerText4: "كانون الأول ٢٠٠٠: قدم الرئيس كلينتون معايير: دولة فلسطينية على ٩٤–٩٦٪ من الضفة الغربية، تبادل أراض بنسبة ١–٣٪، أحياء القدس الشرقية العربية تحت السيادة الفلسطينية، الأحياء اليهودية تحت السيادة الإسرائيلية، وحل للاجئين على أساس قرار ١٩٤.",
            nopartnerText5: "قبلت القيادة الفلسطينية معايير كلينتون مع بعض التحفظات. قبلت إسرائيل مع ١٤ تحفظاً غيرت الاقتراح جوهرياً – بما في ذلك الحفاظ على السيطرة على غور الأردن ورفض عودة اللاجئين.",
            nopartnerText6: "قمة طابا (كانون الثاني ٢٠٠١): اقترب المفاوضون الإسرائيليون والفلسطينيون أكثر من أي وقت مضى من اتفاق نهائي. أنهى رئيس الوزراء الإسرائيلي باراك المفاوضات في ظل هزيمته الانتخابية الوشيكة.",
            nopartnerSection3: "مبادرة السلام العربية (٢٠٠٢)",
            nopartnerText7: "اعتمدت الجامعة العربية بالإجماع مبادرة السلام العربية السعودية: تطبيع كامل مع إسرائيل مقابل انسحاب إسرائيلي كامل من الأراضي المحتلة عام ١٩٦٧، حل عادل للاجئين الفلسطينيين على أساس قرار ١٩٤، ودولة فلسطينية وعاصمتها القدس الشرقية.",
            nopartnerText8: "الرد الإسرائيلي الرسمي: تجاهل المبادرة. رفضها رئيس الوزراء شارون رفضاً قاطعاً؛ الحكومات اللاحقة لم تتعامل معها رسمياً كأساس للتفاوض.",
            nopartnerText9: "أعيد تأييد المبادرة في ٢٠٠٧ و٢٠١٧. تظهر استطلاعات الرأي باستمرار أن ٦٠–٧٠٪ من الإسرائيليين يدعمونها، ومع ذلك لم تقبلها الحكومات الإسرائيلية أبداً.",
            nopartnerSection4: "عرض أولمرت (٢٠٠٨)",
            nopartnerQuote: "رئيس الوزراء إيهود أولمرت (٢٠٠٨): اقترح دولة فلسطينية على ٩٣٪ من الضفة الغربية، تبادل أراض بنسبة ٥٫٨٪، لا سيادة على حوض القدس الشرقي المقدس، لا حق عودة، وجود إسرائيلي في غور الأردن لمدة ٤٠ عاماً. طلب الرئيس عباس توضيحاً بشأن الخرائط والحدود؛ غادر أولمرت منصبه دون رد.",
            nopartnerText10: "رد عباس: 'قلت نعم فوراً، لكن طلبت الخرائط. أولمرت لم يقدمها. اختفى العرض عندما استقال.'",
            nopartnerText11: "رواية أن 'عباس رفض عرضاً سخياً' يناقضها أولمرت نفسه، الذي أكد لاحقاً: 'لم نتوصل إلى اتفاق. أتحمل المسؤولية الكاملة عن عدم إكماله.'",
            nopartnerText12: "المستوطنات: خلال فترة ولاية أولمرت (٢٠٠٦–٢٠٠٩)، زاد عدد المستوطنين بمقدار ٣٠٫٠٠٠ – أكبر نمو لأي حكومة ما بعد أوسلو.",
            nopartnerSection5: "طلب عضوية فلسطين في الأمم المتحدة (٢٠١١)",
            nopartnerText13: "قدم الرئيس عباس طلب عضوية فلسطين الكاملة في الأمم المتحدة – مبادرة دبلوماسية لا عنفية للدولة ضمن حدود ١٩٦٧. هددت الولايات المتحدة باستخدام الفيتو، وتم تخفيض الطلب إلى وضع دولة مراقبة غير عضو (٢٠١٢).",
            nopartnerText14: "الرد الإسرائيلي: تسريع بناء المستوطنات. في الشهر التالي للطلب، أعلنت إسرائيل عن ٣٠٠٠ وحدة سكنية جديدة في القدس الشرقية والضفة الغربية.",
            nopartnerSection6: "الإجماع الأكاديمي",
            nopartnerText15: "رشيد خالدي (٢٠٢٠): 'أسطورة \"لا شريك\" هي أكثر أنماط الدعاية نجاحاً في عملية السلام الإسرائيلية. إنها تنقل اللوم من المحتل إلى المحتل، من الطرف ذي القوة الساحقة إلى الطرف الذي لا يملك شيئاً.'",
            nopartnerText16: "ناثان ثرال (٢٠١٧): 'الادعاء بأن إسرائيل لا شريك لها في السلام هو نبوءة ذاتية التحقق. بتوسيع المستوطنات، ورفض التفاوض على قضايا الوضع النهائي، ورفض مبادرات السلام العربية، تضمن إسرائيل عدم وجود شريك بشروطها الخاصة.'",
            nopartnerText17: "هنري سيغمان (٢٠٠٧): 'العقبة الحقيقية أمام السلام ليست غياب شريك فلسطيني، بل عدم رغبة إسرائيل في إنهاء الاحتلال.'",
            downloadTextNopartner: "تحميل ملف الأدلة الكامل (PDF)",
            nopartnerCitation1: "روبرت مالي، 'كامب ديفيد: مأساة الأخطاء'",
            nopartnerCitation2: "معايير كلينتون ٢٠٠٠؛ قرار ١٩٤",
            nopartnerCitation3: "مبادرة السلام العربية ٢٠٠٢",
            nopartnerCitation4: "خالدي، ثرال، سيغمان",
            related1Nopartner: "خيانة أوسلو",
            related1DescNopartner: "اتفاقات أوسلو لم تجمّد الاستيطان – بل تضاعف (١٩٩٣–٢٠٠٠).",
            related2Nopartner: "التمييز في المياه",
            related2DescNopartner: "المستوطنون يستهلكون ٤ أضعاف المياه أكثر من الفلسطينيين في الضفة الغربية.",
            related3Nopartner: "أبرتهايد القضاء العسكري",
            related3DescNopartner: "فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية.",



            // water discrimination page
            // Add to the 'ar' section:
            waterDeepTitle: "أبارتهايد المياه: تمييز منهجي",
            statSettler: "استهلاك المستوطن اليومي",
            statPalestinian: "استهلاك الفلسطيني اليومي",
            statGaza: "مياه غزة غير صالحة",
            waterSection1: "توزيع غير عادل",
            waterText1: "الضفة الغربية: المستوطنون الإسرائيليون يستهلكون ٣٠٠ لتر للفرد/يومياً؛ الفلسطينيون ٨٠ لتر (الحد الأدنى لمنظمة الصحة ١٠٠ لتر).",
            waterText2: "غزة: ٩٠٪ من مياه الخزان الجوفي غير صالحة للشرب؛ ٨٠٪ من سكان غزة يعتمدون على مياه ملوثة.",
            waterText3: "ميكوروت (شركة المياه الإسرائيلية) تزود ٨٠٪ من مياه الضفة للمستوطنات، مع تقييد وصول الفلسطينيين.",
            waterSection2: "انتهاكات القانون الدولي",
            waterText4: "اتفاقية جنيف الرابعة، المادة ٥٣: تحظر تدمير البنية التحتية للمياه في الأراضي المحتلة.",
            waterText5: "منظمة العفو الدولية ٢٠١٩: 'أبارتهايد المياه الإسرائيلي يحرم الفلسطينيين من الوصول العادل.'",
            waterText6: "هيومن رايتس ووتش ٢٠٢١: 'تخصيص المياه التمييزي عنصر أساسي في نظام الفصل العنصري.'",
            waterSection3: "أزمة إنسانية",
            waterQuote: "٨٠٪ من الأراضي الزراعية الفلسطينية في غور الأردن محرومة من مياه الري، مما يدمر سبل العيش.",
            waterText7: "البنك الدولي ٢٠٢٢: خسائر قطاع المياه تتجاوز ١٫١ مليار دولار سنوياً بسبب القيود الإسرائيلية.",
            waterText8: "تجمعات فلسطينية في المنطقة ج: ١٨٠ ألف شخص غير متصلين بشبكة المياه.",
            downloadTextWater: "تحميل ملف الأدلة الكامل (PDF)",
            waterCitation1: "بتسيلم 'بحر عطشان' ٢٠٢٣",
            waterCitation2: "منظمة العفو الدولية ٢٠١٩",
            waterCitation3: "هيومن رايتس ووتش ٢٠٢١",
            waterCitation4: "البنك الدولي ٢٠٢٢؛ مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية",
            related1Water: "حصار ٢٠٠٥، ليس سلاماً",
            related1DescWater: "إعادة تسمية الانسحاب كتنازل – في الحقيقة سيطرة كاملة.",
            related2Water: "أسطورة 'النمو الطبيعي'",
            related2DescWater: "حوافز حكومية واستيلاء على الأراضي، وليس ولادات.",
            related3Water: "أبرتهايد القضاء العسكري",
            related3DescWater: "فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية.",




            // weaponize page
            // Add to the 'ar' section:
            weaponizeDeepTitle: "تسليح معاداة السامية: الخلط بين النقد والكراهية",
            statIHRA: "أمثلة IHRA تتعلق بإسرائيل",
            statScholars: "باحث يهودي وقعوا إعلان القدس",
            statStates: "ولاية أمريكية لديها قوانين مناهضة للمقاطعة",
            weaponizeSection1: "تعريف IHRA: أداة سياسية",
            weaponizeText1: "تعريف العمل للتحالف الدولي لإحياء ذكرى المحرقة (IHRA) لمعاداة السامية (٢٠١٦) يتضمن ١١ مثالاً، سبعة منها تتعلق بنقد إسرائيل – بما في ذلك 'الادعاء بأن وجود دولة إسرائيل هو مشروع عنصري' و 'تطبيق معايير مزدوجة' على إسرائيل.",
            weaponizeText2: "يجادل النقاد بأن التعريف يخلط بين معاداة السامية والخطاب السياسي المشروع، ويساوي بين نقد السياسة الإسرائيلية وكراهية اليهود. تحذر منظمات حقوق الإنسان من أنه استخدم لقمع المناصرة لفلسطين.",
            weaponizeText3: "كينيث ستيرن، الصائغ الرئيسي للتعريف، صرح في ٢٠١٩: 'أنا قلق من أن التعريف، الذي صغته للمساعدة في حماية الطلاب اليهود، يستخدم الآن لإسكات الحرية الأكاديمية ومعاقبة المناصرة لحقوق الفلسطينيين.'",
            weaponizeSection2: "إعلان القدس حول معاداة السامية (٢٠٢١)",
            weaponizeQuote: "إعلان القدس حول معاداة السامية (JDA)، الموقع من قبل أكثر من ١١٠ باحث يهودي بارز و ٤٠+ منظمة: 'معاداة السامية هي تمييز أو تحيز أو عداء أو عنف ضد اليهود كيهود. ... ليس معاداة للسامية نقد تصرفات دولة إسرائيل، أو الدعوة إلى المقاطعة وسحب الاستثمارات، أو دعم الحقوق الفلسطينية.'",
            weaponizeText4: "يشمل الموقعون: عمر بارتوف، ألون كونفينو، عاموس غولدبرغ، برايان كلوغ، راز سيغال، جوديث بتلر، ونعومي تشان – أصوات رائدة في دراسات المحرقة والتاريخ اليهودي وحقوق الإنسان.",
            weaponizeText5: "يُميز الإعلان صراحة بين معاداة السامية والنقد المشروع لإسرائيل، بما في ذلك الدعوة إلى المقاطعة، مؤكداً أن 'نقد إسرائيل الذي قد يُتسامح معه لأي دولة أخرى لا يمكن اعتباره معاداة للسامية.'",
            weaponizeSection3: "قمع المناصرة لفلسطين",
            weaponizeText6: "هيومن رايتس ووتش (٢٠٢٣): 'خطاب الإنكار' – توثق كيف تستخدم إسرائيل وحلفاؤها ادعاءات معاداة السامية لنزع شرعية منظمات حقوق الإنسان، بما في ذلك هيومن رايتس ووتش ومنظمة العفو الدولية وبتسيلم، بعد أن نشروا تقارير خلصت إلى أن ممارسات إسرائيل تشكل فصلاً عنصرياً.",
            weaponizeText7: "منظمة العفو الدولية (٢٠٢٢): بعد تقريرها عن الفصل العنصري، واجهت منظمة العفو حملات منسقة تصف المنظمة بأنها 'معادية للسامية' – على الرغم من تاريخها الممتد ٦٠ عاماً في الدفاع عن المجتمعات اليهودية والتعليم عن المحرقة.",
            weaponizeText8: "بتسيلم (٢٠٢١): بعد إصدار تقريرها عن الفصل العنصري، تلقى موظفو بتسيلم تهديدات بالقتل، وأطلقت الحكومة الإسرائيلية تشريعات لحظر المنظمة، مستشهدة بـ 'نزع الشرعية' و 'الخطاب المعادي للسامية.'",
            weaponizeSection4: "قوانين مناهضة المقاطعة والحرية الأكاديمية",
            weaponizeText9: "أكثر من ٣٠ ولاية أمريكية سنت قوانين مناهضة للمقاطعة (BDS) تطلب من المتعاقدين التصديق بأنهم لا يقاطعون إسرائيل. ألغت المحاكم العديد منها باعتبارها انتهاكات لحرية التعبير (أركنساس، أريزونا، كانساس). تعارضها الاتحاد الأمريكي للحريات المدنية باعتبارها غير دستورية.",
            weaponizeText10: "في المملكة المتحدة، تم اعتماد تعريف IHRA من قبل الجامعات لمعاقبة النشطاء الطلابيين. حذر تقرير للأكاديمية البريطانية ٢٠٢٢ من أنه 'يُجمد الحرية الأكاديمية' في مجال الدراسات الفلسطينية.",
            weaponizeText11: "ألمانيا: أصدر البوندستاغ قراراً عام ٢٠١٩ يعلن أن حركة المقاطعة (BDS) 'معادية للسامية'. ألغت المؤسسات الثقافية فعاليات لنقاد يهود وإسرائيليين لإسرائيل، بما فيهم الصوت اليهودي من أجل السلام العادل في الشرق الأوسط.",
            weaponizeSection5: "أصوات يهودية ضد التسليح",
            weaponizeText12: "الصوت اليهودي من أجل السلام (JVP): 'يُستخدم تسليح معاداة السامية لإسكات النقاد اليهود لإسرائيل وكذلك الفلسطينيين وحلفائهم. معاداة السامية الحقيقية هي تهديد خطير؛ الاتهامات الكاذبة تقوض جهود مكافحتها.'",
            weaponizeText13: "IfNotNow: 'نحن يهود أمريكيون نناضل من أجل الحرية والكرامة للجميع. مساواة معارضتنا للاحتلال بمعاداة السامية هو تكتيك لتقسيمنا وحماية الوضع الراهن.'",
            weaponizeText14: "بيتر بينارت (٢٠٢١): 'النضال ضد معاداة السامية مقدس. لكن استخدامه لحماية إسرائيل من النقد يدنس ذكرى المحرقة ويخون التقليد الأخلاقي اليهودي.'",
            downloadTextWeaponize: "تحميل ملف الأدلة الكامل (PDF)",
            weaponizeCitation1: "تعريف IHRA ٢٠١٦؛ إعلان القدس ٢٠٢١",
            weaponizeCitation2: "هيومن رايتس ووتش 'خطاب الإنكار' ٢٠٢٣",
            weaponizeCitation3: "الأكاديمية البريطانية ٢٠٢٢؛ البوندستاغ الألماني ٢٠١٩",
            weaponizeCitation4: "الصوت اليهودي من أجل السلام؛ IfNotNow؛ بيتر بينارت",
            related1Weaponize: "لا شريك' كاذب'",
            related1DescWeaponize: "رواية أن إسرائيل قدمت عروضاً غير مسبوقة – تتجاهل الاستعمار المستمر.",
            related2Weaponize: "أبرتهايد القضاء العسكري",
            related2DescWeaponize: "فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية.",
            related3Weaponize: "سرقة التراث",
            related3DescWeaponize: "حفريات تزيل الطبقات الفلسطينية، تعيد تسمية المواقع كتراث يهودي حصري.",




            // no exchange page
            // Add to the 'ar' section:
            noexchangeDeepTitle: "معادلة خاطئة: اللاجئون الفلسطينيون ويهود مزراحي",
            statPalestinian: "لاجئ فلسطيني (١٩٤٨)",
            statMizrahi: "مهاجر مزراحي",
            statResolution: "قرار الأمم المتحدة ١٩٤",
            noexchangeSection1: "أسطورة 'التبادل السكاني'",
            noexchangeText1: "غالباً ما تعادل الدعاية الإسرائيلية بين لاجئي فلسطين ١٩٤٨ (٧٥٠٫٠٠٠–٨٥٠٫٠٠٠ مُهجر) ويهود مزراحي الذين هاجروا إلى إسرائيل من الدول العربية (حوالي ٨٥٠٫٠٠٠ بين ١٩٤٨–١٩٧٠)، مؤطرة إياه كـ 'تبادل سكاني متبادل'.",
            noexchangeText2: "هذه المعادلة خاطئة تاريخياً وقانونياً. اللاجئون الفلسطينيون طُردوا قسراً في تطهير عرقي مخطَّط؛ هجرة المزراحي كانت مشجَّعة وميسَّرة، وفي حالات كثيرة دبَّرتها إسرائيل.",
            noexchangeText3: "لا اتفاق ثنائي، لا معاهدة نقل سكان، لا قرار أممي يعترف بأي 'تبادل' – المصطلح نفسه هو بناء سياسي، ليس حقيقة قانونية.",
            noexchangeSection2: "اللاجئون الفلسطينيون: طرد قسري",
            noexchangeText4: "خطة دالت (آذار ١٩٤٨): اعتمدت القيادة الصهيونية خطة رئيسية لطرد المدنيين الفلسطينيين من المناطق المخصصة للدولة اليهودية. دُمِّر ٤١٨ قرية على الأقل، ١٥ مدينة وبلدة أُخليت.",
            noexchangeText5: "مجازر (دير ياسين، الطنطورة، اللد): عنف منهجي وحرب نفسية تسببت في نزوح جماعي. نُقل الناجون على شاحنات وطُردوا إلى الضفة الغربية، غزة، الأردن، لبنان، وسوريا.",
            noexchangeText6: "قرار الجمعية العامة ١٩٤ (١٩٤٨): يقر حق اللاجئين الفلسطينيين 'في العودة إلى ديارهم والعيش بسلام مع جيرانهم.' هذا الحق فردي، دائم، وغير قابل للتنازل. تم تأكيده سنوياً من قبل الجمعية العامة للأمم المتحدة.",
            noexchangeSection3: "هجرة المزراحي: مشجَّعة، غير مطرودة",
            noexchangeText7: "قانون العودة (١٩٥٠) منح كل يهودي في العالم الحق في الهجرة إلى إسرائيل والحصول على الجنسية الفورية. تم تجنيد يهود مزراحي بنشاط، نقلهم جواً (عملية عزرا ونحميا، عملية بساط الريح)، واستيعابهم من قبل الدولة.",
            noexchangeText8: "يهودا شينهاف، 'اليهود العرب' (٢٠٠٦): 'رواية لاجئي مزراحي بُنيت بأثر رجعي في التسعينيات لمواجهة المطالب الفلسطينية. وقت وصولهم، لم يعتبروا لاجئين من قبل إسرائيل أو الأمم المتحدة.'",
            noexchangeText9: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين: يهود مزراحي لم يُسجلوا قط كلاجئين، لا يتلقون مساعدة من الأونروا أو المفوضية، ولا يوجد قرار أممي يمنحهم حق العودة إلى بلدان المنشأ.",
            noexchangeSection4: "الدور الإسرائيلي في هجرة المزراحي",
            noexchangeText10: "عمل عملاء إسرائيليون في العراق، المغرب، اليمن، ومصر يشجعون الهجرة بنشاط – أحياناً باستخدام القنابل والترهيب (مثل تفجيرات بغداد ١٩٥١، محل خلاف لكن وثقه مؤرخون مثل نعيم جلادي وعباس شبلك).",
            noexchangeText11: "خدمت هجرة المزراحي احتياجات إسرائيل الديموغرافية والعمالية. بين ١٩٤٨–١٩٥١، تضاعف عدد السكان اليهود في إسرائيل، خاصة من خلال هجرة المزراحي والناجين من المحرقة.",
            noexchangeText12: "ممتلكات يهود مزراحي لم تصادرها إسرائيل – على عكس الممتلكات الفلسطينية التي صودرت قانونياً بموجب قانون أملاك الغائبين. بعض يهود مزراحي تلقوا تعويضات من إسرائيل، وليس من الدول العربية.",
            noexchangeSection5: "الإجماع الأكاديمي",
            noexchangeQuote: "إيلان بابيه (٢٠٢٢): 'المقارنة بين اللاجئين الفلسطينيين ويهود مزراحي مفلسة أخلاقياً وتاريخياً. مجموعة واحدة طُهرت عرقياً على يد إسرائيل؛ والأخرى أحضرتها إسرائيل إلى إسرائيل. مساواتهما هي أداة دعاية متعمدة لإنكار الحقوق الفلسطينية.'",
            noexchangeText13: "يهودا شينهاف: 'احتاجت الصهيونية إلى مهاجرين يهود لبناء الدولة. وُسِمَ لاجئ بأثر رجعي كثقل موازن سياسي للرواية الفلسطينية.'",
            noexchangeText14: "آفي شلايم (٢٠١٨): 'لم يكن هناك تبادل سكاني. كان هناك نزوح فلسطيني، وبشكل منفصل، تدفق لليهود إلى إسرائيل. ربطهما هو تمرين في الدعاية السياسية، وليس في البحث التاريخي.'",
            noexchangeText15: "بديل (٢٠٢٤): 'أسطورة \"التبادل السكاني\" هي تشويه متعمد للقانون الدولي. حقوق اللاجئين الفلسطينيين فردية، غير قابلة للتصرف، ومُدونة في قرارات الأمم المتحدة. لا يمكن مقايضتها أو مقاصتها.'",
            downloadTextNoexchange: "تحميل ملف الأدلة الكامل (PDF)",
            noexchangeCitation1: "يهودا شينهاف، 'اليهود العرب'",
            noexchangeCitation2: "قرار الجمعية العامة ١٩٤",
            noexchangeCitation3: "قانون العودة ١٩٥٠",
            noexchangeCitation4: "بابيه، شلايم، بديل",
            related1Noexchange: "النكبة ١٩٤٨",
            related1DescNoexchange: "تهجير منهجي لأكثر من ٤٠٠ بلدة فلسطينية.",
            related2Noexchange: "قانون أملاك الغائبين",
            related2DescNoexchange: "كيف شرعت إسرائيل مصادرة الأراضي الفلسطينية باستخدام 'الحاضرين الغائبين'.",
            related3Noexchange: "أسطورة: أرض بلا شعب",
            related3DescNoexchange: "فلسطين قبل الصهيونية كانت مأهولة بكثافة بمدن عمرها قرون.",





            // oslo betrayal page
            // Add to the 'ar' section:
            osloDeepTitle: "اتفاقات أوسلو: وهم السلام",
            statSettlers1993: "مستوطن ١٩٩٣",
            statSettlers2024: "مستوطن ٢٠٢٤",
            statOutposts: "بؤرة استيطانية غير قانونية بعد أوسلو",
            osloSection1: "تضاعف الاستيطان",
            osloText1: "١٩٩٣ (أوسلو ١): ١١٠ آلاف مستوطن في الضفة. ٢٠٠٠ (حقبة أوسلو ٢): ١٩٨ ألف مستوطن – زيادة ٨٠٪ خلال 'عملية السلام'.",
            osloText2: "٢٠٢٤: أكثر من ٤٩٠ ألف مستوطن في الضفة، و ٢٣٠ ألف في القدس الشرقية. المجموع >٧٢٠ ألفاً.",
            osloText3: "أكثر من ١٥٠ بؤرة استيطانية غير قانونية بنيت منذ أوسلو، العديد منها 'شرعنت' لاحقاً من حكومات إسرائيل.",
            osloSection2: "لا تماثل هيكلي",
            osloText4: "قسمت أوسلو الضفة إلى مناطق أ، ب، ج. المنطقة ج (٦٠٪ من الضفة) تحت السيطرة الإسرائيلية الكاملة – توسعت المستوطنات بشكل هائل.",
            osloText5: "السلطة الفلسطينية حصلت على مسؤوليات بلدية لكن لا سيادة، لا سيطرة حدودية، لا حقوق مياه.",
            osloText6: "بروتوكول باريس الاقتصادي (١٩٩٤) ربط فلسطين باتحاد جمركي مع إسرائيل – تبعية دائمة.",
            osloSection3: "الدراسات النقدية",
            osloQuote: "إدوارد سعيد: 'كانت أوسلو أداة استسلام فلسطيني، وليس طريقاً للدولة.'",
            osloText7: "ناثان ثرال (مجلة لندن ريفيو أوف بوكس، ٢٠١٧): 'أوسلو أسست الاحتلال، جعلته أرخص وأكثر ديمومة.'",
            osloText8: "رجاء شحادة: 'أوسلو حولت منظمة التحرير إلى مقاول من الباطن لإسرائيل.'",
            osloText9: "ميرون بنفينستي: 'كانت أوسلو واجهة للاستعمار المتواصل.'",
            downloadTextOslo: "تحميل ملف الأدلة الكامل (PDF)",
            osloCitation1: "قاعدة بيانات السلام الآن للاستيطان",
            osloCitation2: "بتسيلم ٢٠٢٤",
            osloCitation3: "إدوارد سعيد؛ ناثان ثرال",
            osloCitation4: "بروتوكول باريس ١٩٩٤",
            related1Oslo: "أسطورة 'النمو الطبيعي'",
            related1DescOslo: "حوافز حكومية واستيلاء على الأراضي، وليس ولادات.",
            related2Oslo: "لا شريك' كاذب'",
            related2DescOslo: "رواية أن إسرائيل قدمت عروضاً غير مسبوقة – تتجاهل الاستعمار المستمر.",
            related3Oslo: "أبرتهايد القضاء العسكري",
            related3DescOslo: "فلسطينيون أمام محاكم عسكرية، مستوطنون أمام محاكم مدنية."








        }
    };

    // Track current language
    let currentLanguage = 'en';

    // ---------- Language setter ----------
    function setLanguage(lang) {
        currentLanguage = lang;
        const isArabic = lang === 'ar';

        // Update body class
        if (isArabic) {
            body.classList.add('rtl');
            if (langToggle) langToggle.textContent = 'EN';
        } else {
            body.classList.remove('rtl');
            if (langToggle) langToggle.textContent = 'AR';
        }

        // Update all elements with data-key attributes
        updateAllElements(lang);

        // Store current language
        try {
            localStorage.setItem('preferredLanguage', lang);
        } catch (e) {
            console.warn('Could not save language preference:', e);
        }

        // Dispatch custom event for other scripts
        const event = new CustomEvent('languageChanged', {
            detail: { language: lang }
        });
        document.dispatchEvent(event);
    }

    // Update all translatable elements
    function updateAllElements(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder !== undefined) {
                        el.placeholder = translations[lang][key];
                    }
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translations[lang][key];
                } else if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'A' || el.tagName === 'BUTTON') {
                    el.textContent = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update report-specific elements
        updateReportSpecificElements(lang);
    }

    // ---------- Update report-specific elements ----------
    function updateReportSpecificElements(lang) {
        // Update review section content if on step 4
        if (document.getElementById('step4')?.classList.contains('active')) {
            if (typeof window.updateReviewSection === 'function') {
                window.updateReviewSection();
            }
        }

        // Update file list "None" text
        const reviewFiles = document.getElementById('reviewFiles');
        if (reviewFiles && reviewFiles.getAttribute('data-key') === 'none') {
            reviewFiles.textContent = translations[lang].none;
        }
    }

    // ---------- Initialize on DOM load ----------
    document.addEventListener('DOMContentLoaded', function () {
        // Load saved language preference
        try {
            const savedLanguage = localStorage.getItem('preferredLanguage');
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
                setLanguage(savedLanguage);
            } else {
                setLanguage('en');
            }
        } catch (e) {
            console.warn('Could not load language preference:', e);
            setLanguage('en');
        }
        // Update no results message on language change
        document.addEventListener('languageChanged', function () {
            if (document.getElementById('noResultsMessage')) {
                showNoResults();
            }
            if (searchStats && searchStats.style.display === 'flex') {
                const query = searchInput.value.trim().toLowerCase();
                const count = allCards.filter(card => card.style.display === 'flex').length;
                const lang = document.body.classList.contains('rtl') ? 'ar' : 'en';
                resultsCount.textContent = lang === 'ar'
                    ? `تم العثور على ${count} نتيجة`
                    : `Found ${count} result${count !== 1 ? 's' : ''}`;
            }
        });

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Event listeners

        // Initialize search functionality
        if (searchInput && searchBtn) {
            function performSearch() {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `listing.html?search=${encodeURIComponent(query)}`;
                } else {
                    window.location.href = 'listing.html';
                }
            }

            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    performSearch();
                }
            });
        }
    });

    // ---------- Event listeners ----------
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // ---------- Helper functions for other scripts ----------
    window.getCurrentLanguage = function () {
        return currentLanguage;
    };

    window.getTranslation = function (key) {
        return translations[currentLanguage]?.[key] || key;
    };

    // Export translations for other scripts
    window.translations = translations;

})();