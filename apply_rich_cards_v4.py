import os
import re

# Configuration
# User corrected URL: https://0u554m4.github.io/paltruth
BASE_URL = "https://0u554m4.github.io/paltruth"
IMG_BASE_URL = f"{BASE_URL}/lists/img"  

files_data = {
    "absentee.html": {
        "title": "Absentee Property Law",
        "desc": "How Israel's 1950 Absentee Property Law legalized seizure of Palestinian land from 'present absentees' - over 16,000 acres confiscated. Legal analysis with citations.",
        "keywords": "Absentee Property Law, Israel, Palestine, land confiscation, present absentees, 1950"
    },
    "emptyland.html": {
        "title": "The Myth of Empty Land",
        "desc": "Pre-1948 Palestine had 1.2 million Arabs, 1,200+ villages, and thriving cities like Jaffa, Haifa, and Jerusalem. Historical census data debunks the 'empty land' narrative.",
        "keywords": "Empty land myth, Palestine pre-1948, Palestinian villages, historical demography"
    },
    "gazasiege.html": {
        "title": "17 Years of Gaza Siege",
        "desc": "2.3 million people trapped in Gaza, 80% food aid dependent, 96% water unfit for drinking. UN reports, blockade impact, and humanitarian crisis documentation.",
        "keywords": "Gaza siege, blockade, humanitarian crisis, UN reports, Palestine"
    },
    "heritage.html": {
        "title": "Palestinian Heritage Erasure",
        "desc": "Over 200 Palestinian cultural heritage sites destroyed since 1948, including centuries-old mosques, churches, and villages. UNESCO documentation included.",
        "keywords": "Palestinian heritage, cultural erasure, destroyed sites, UNESCO"
    },
    "miljusapa.html": {
        "title": "The Miljusapa Document (1937)",
        "desc": "Early Zionist master plan for population transfer of Palestinians. Full English translation and historical analysis with archival references.",
        "keywords": "Miljusapa document, Zionist plan, population transfer, 1937"
    },
    "nakba.html": {
        "title": "1948 Nakba: Ethnic Cleansing",
        "desc": "Plan Dalet, 418 villages destroyed, 750,000 refugees – archival evidence from IDF archives, Morris, Pappé, and UN Resolution 194. Complete historical dossier.",
        "keywords": "Nakba, 1948, ethnic cleansing, Plan Dalet, Palestinian refugees"
    },
    "naturalgrowth.html": {
        "title": "The 'Natural Growth' Myth",
        "desc": "Debunking the 'demographic threat': Analysis of Palestinian birth rates, Jewish immigration policies, and the myth of 'natural growth' as a political tool.",
        "keywords": "natural growth myth, demographic threat, Palestinian birth rates, immigration"
    },
    "noexchange.html": {
        "title": "No Population Exchange",
        "desc": "False equivalence: Mizrahi Jews vs. Palestinian refugees - legal, historical, and moral distinctions. UN resolutions, property rights, and international law.",
        "keywords": "population exchange, Mizrahi Jews, Palestinian refugees, false equivalence"
    },
    "nopartner.html": {
        "title": "The 'No Partner' Myth",
        "desc": "Examining the 'no partner for peace' claim: Historical peace offers, Palestinian concessions, and documented rejections. Full timeline with primary sources.",
        "keywords": "no partner myth, peace process, Palestinian concessions, historical timeline"
    },
    "osbet.html": {
        "title": "The OSBET Document (1967)",
        "desc": "1967 Israeli intelligence assessment predicting Palestinian resistance and recommending systematic repression. Full English translation and analysis.",
        "keywords": "OSBET document, 1967, Israeli intelligence, Palestinian resistance"
    },
    "watdis.html": {
        "title": "Water Apartheid in Palestine",
        "desc": "Israel controls 80% of West Bank aquifers. Palestinians get 20% of water while settlers use 6x more. UN reports, data, and international law analysis.",
        "keywords": "water apartheid, West Bank aquifers, water inequality, Palestine"
    },
    "weaponize.html": {
        "title": "Weaponizing Humanitarian Aid",
        "desc": "How Israel weaponized food, water, and aid: Analysis of military orders 1948-present, permit system, blockade policies, and humanitarian impact.",
        "keywords": "weaponizing aid, humanitarian crisis, blockade, military orders"
    }
}

# The bottom script uses .querySelector('.share-buttons') instead of getElementById('shareIcons')
BOTTOM_SCRIPT = """  <!-- FIX SHARE BUTTONS JAVASCRIPT -->
  <script>
  (function() {
      // Use the correct GitHub Pages URL
      const baseUrl = "https://0u554m4.github.io/paltruth";
      const currentPath = window.location.pathname;
      const currentUrl = encodeURIComponent(baseUrl + currentPath);
      
      const pageTitle = encodeURIComponent(document.title.replace(' | Kasr Alsamt', ''));
      
      const metaDesc = document.querySelector('meta[name="description"]');
      const pageDesc = metaDesc ? encodeURIComponent(metaDesc.getAttribute('content')) : encodeURIComponent("Palestinian history and evidence documentation");
      
      const shares = [
          { name: "Facebook", icon: "fab fa-facebook-f", url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}` },
          { name: "Twitter", icon: "fab fa-twitter", url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}&via=KasrAlsamt` },
          { name: "LinkedIn", icon: "fab fa-linkedin-in", url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}` },
          { name: "WhatsApp", icon: "fab fa-whatsapp", url: `https://api.whatsapp.com/send?text=${pageTitle}%20-%20${pageDesc}%20${currentUrl}` },
          { name: "Telegram", icon: "fab fa-telegram", url: `https://t.me/share/url?url=${currentUrl}&text=${pageTitle}%0A${pageDesc}` },
          { name: "Reddit", icon: "fab fa-reddit-alien", url: `https://www.reddit.com/submit?url=${currentUrl}&title=${pageTitle}` },
          { name: "Email", icon: "fas fa-envelope", url: `mailto:?subject=${pageTitle}&body=${pageDesc}%0A%0A${currentUrl}` }
      ];

      // Fix: Use querySelector for class instead of ID
      const container = document.querySelector('.share-buttons');
      if (container) {
          container.innerHTML = '';
          shares.forEach(platform => {
              const link = document.createElement('a');
              link.href = platform.url;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.className = 'share-icon ' + platform.name.toLowerCase(); // preserve class if needed
              link.setAttribute('aria-label', platform.name);
              link.innerHTML = `<i class="${platform.icon}"></i>`;
              container.appendChild(link);
          });
      }
  })();
  </script>

  <!-- DEBUG TOOL -->
  <div style="margin: 1rem 0; padding: 1rem; background: #f0f0f0; border-left: 4px solid #9b6b43; font-size: 0.9rem; display: none;" id="social-debug">
      <strong>🔍 Social Share Preview Debug:</strong><br>
      Title: <span id="debug-title">__TITLE__</span><br>
      Description: <span id="debug-desc">__DESC__</span><br>
      Image: <span id="debug-image">__IMG_URL__</span><br>
      URL: <span id="debug-url">__BASE_URL__/lists/__FILENAME__</span>
  </div>

  <script>
  if (window.location.search.includes('debug')) {
      document.getElementById('social-debug').style.display = 'block';
  }
  </script>
</body>"""

def update_file(filename, data):
    filepath = os.path.join("lists", filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    img_name = filename.replace(".html", ".jpg")
    img_url = f"{IMG_BASE_URL}/{img_name}"
    
    # 2. Update Scripts at bottom
    # Remove previous script block
    content = re.sub(r'<!-- FIX SHARE BUTTONS JAVASCRIPT -->.*</body>', '</body>', content, flags=re.DOTALL)
    
    # Prepare bottom script
    # Note: we don't need to replace username here as it's hardcoded in the string variable above for safety
    new_bottom = BOTTOM_SCRIPT.replace("__TITLE__", data["title"])
    new_bottom = new_bottom.replace("__DESC__", data["desc"])
    new_bottom = new_bottom.replace("__IMG_URL__", img_url)
    new_bottom = new_bottom.replace("__BASE_URL__", BASE_URL)
    new_bottom = new_bottom.replace("__FILENAME__", filename)
    
    content = content.replace('</body>', new_bottom)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {filename}")

if __name__ == "__main__":
    for file, data in files_data.items():
        update_file(file, data)
