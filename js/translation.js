document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');
    const languageDropdown = document.getElementById('language-dropdown');

    const translations = {
        "en": {
            "menuwork": "Work",
            "menuabout": "About",
            "menucontact": "Contact",
            "herotext1": "Thu Tran",
            "herotext2": "Self-taught frontend developer",
            "herobutton1": "See my work",
            "herobutton2": "See my work",
            "worktitle": "Recent projects",
            "project1": "Created as my major first project, this is a dog adoption website allowing users to filter data based on multiple complex criteria.",
            "project2": "This website exemplifies my skills, qualifications, education, and experiences.",
            "project3": `Self-learning non-responsive project inspired by <a class="hightlight"
                href="https://dribbble.com/shots/23889841-Cutpart-Landing-Page" target="_blank">HALO LAB</a>.`,
            "abouttitle": "About me",
            "info1": `My name is <span class="highlight">Tran Thi Anh Thu</span> based in Viet Nam but you can call me <span class="highlight">SuJa</span>. I love to <span class="highlight">design and develop</span> visually appealing and aesthetically <span class="highlight">websites</span> while focusing on smooth and intuitive <span class="highlight">user interactions and navigation</span>.`,
            "info2": `Check out my CV <a href="https://drive.google.com/file/d/1l7glQwF373qO6XLiM_osZQyw7ICErplX/view?usp=sharing" target="_blank" class="highlight">here</a>.`,
            "machinelang": "Languages",
            "framework": "Frameworks/Libraries",
            "special": "Special",
            "name": "Your full name",
            "email": "Your email address",
            "message": "Your message",
            "contacttitle": "Contact",
            "formname": "Full name",
            "namePlaceholder": "Your full name",
            "formsubject": "Subject",
            "subject": "Email subject",
            "emailPlaceholder": "Your email address",
            "formmessage": "Message",
            "messagePlaceholder": "Your message",
            "formsend": "Send",
            "contactphone": "Phone:",
            "contactlocation1": "Location:",
            "contactlocation2": `<a href="https://en.wikipedia.org/wiki/Da_Lat" target="_blank">Da Lat,
                      Viet Nam</a>&nbsp;<svg class="success-icon" xmlns="http://www.w3.org/2000/svg" height="20px"
                      viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                      <path
                        d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
                    </svg>`,
        },
        "vi": {
            "menuwork": "Dự án",
            "menuabout": "Tôi là?",
            "menucontact": "Liên hệ",
            "herotext1": "Trần Thư",
            "herotext2": "Thiết kế & phát triển website",
            "herobutton1": "Dự án đã làm",
            "herobutton2": "Dự án đã làm",
            "worktitle": "Dự án đã làm",
            "project1": "Dự án đầu tay của tôi là về trang web nhận nuôi các chú chó. Điểm nổi bật là người dùng có thể lọc kết quả tìm kiếm bằng nhiều tiêu chí khác nhau.",
            "project2": "Trang web thể hiện kỹ năng, trình độ, học vấn và kinh nghiệm của tôi.",
            "project3": `Dự án tự học đơn giản được lập trình từ thiết kế của <a class="hightlight"
            href="https://dribbble.com/shots/23889841-Cutpart-Landing-Page" target="_blank">HALO LAB</a>.`,
            "abouttitle": "Giới thiệu bản thân",
            "info1": `Tôi là <span class="highlight">Trần Thị Anh Thư</span>. Mọi người có thể gọi tôi là SuJa. tôi đang ở Việt Nam. Công việc của tôi là <span class="highlight">thiết kế website</span>, đảm bảo trang web có đầy đủ chức năng và tập trung vào <span class="highlight">trải nghiệm người dùng</span>.`,
            "info2": `Xem CV của tôi <a href="https://drive.google.com/file/d/1l7glQwF373qO6XLiM_osZQyw7ICErplX/view?usp=sharing" target="_blank" class="highlight">tại đây</a>.`,
            "machinelang": "Ngôn ngữ lập trình",
            "framework": "Khung ứng dụng/Thư viện",
            "special": "Kỹ năng đặc biệt",
            "name": "Điền họ và tên",
            "email": "Điền email",
            "message": "Điền nội dung tin nhắn",
            "contacttitle": "Liên hệ",
            "formname": "Họ và tên",
            "namePlaceholder": "Nhập họ tên đầy đủ",
            "formsubject": "Tiêu đề",
            "subject": "Điền tiêu đề email",
            "emailPlaceholder": "Nhập địa chỉ email",
            "formmessage": "Nội dung tin nhắn",
            "messagePlaceholder": "Nhập tin nhắn",
            "formsend": "Gửi",
            "contactphone": "Điện thoại:",
            "contactlocation1": "Địa chỉ:",
            "contactlocation2": `<a href="https://vi.wikipedia.org/wiki/%C4%90%C3%A0_L%E1%BA%A1t" target="_blank">Đà Lạt, Việt Nam</a>&nbsp;<svg class="success-icon" xmlns="http://www.w3.org/2000/svg" height="20px"
                      viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                      <path
                        d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
                    </svg>`,
        }
    };

    function applyTranslations(language) {
        const translation = translations[language];
        for (const key in translation) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                    element.placeholder = translation[key];
                } else {
                    element.innerHTML = translation[key];
                }
            }
        }
    }

    function updateLanguage(language) {
        localStorage.setItem('selectedLanguage', language);
        applyTranslations(language);
    }

    languageDropdown.addEventListener('change', function () {
        const selectedLanguage = languageDropdown.value;
        updateLanguage(selectedLanguage);
    });

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageDropdown.value = savedLanguage;
    applyTranslations(savedLanguage);
});
