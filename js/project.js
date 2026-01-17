$(function () {
    var search = location.search;
    var params = new URLSearchParams(search);
    var projectName = params.get('name');

    if (!projectName) {
        return;
    }

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const project = data.projects.find(p => p.id === projectName);

            if (!project) {
                console.error('Project not found:', projectName);
                return;
            }

            // 제목 설정
            $('.portfolio-title').html(project.name);

            // 캐러셀 이미지 생성
            const carouselContainer = $('#project-carousel');
            project.images.forEach(imagePath => {
                carouselContainer.append(`
                    <img src="${imagePath}" style="width: 70%; height: initial; margin: auto" class="img-fluid" alt="">
                `);
            });

            // 프로젝트 정보 생성
            let infoHtml = '<h3>프로젝트 정보</h3><ul>';

            infoHtml += `<li><strong>분류</strong>: ${project.category}</li>`;
            infoHtml += `<li><strong>프레임워크</strong>: ${project.framework}</li>`;

            if (project.github) {
                infoHtml += `<li><strong>GitHub</strong>: <a href="${project.github.url}" target="_blank">${project.github.text}</a></li>`;
            }

            if (project.link) {
                infoHtml += `<li><strong>Link</strong>: <a href="${project.link.url}" target="_blank">${project.link.text}</a></li>`;
            }

            infoHtml += '</ul>';
            infoHtml += `<p>${project.description}</p>`;

            $('#project-info').html(infoHtml);

            // Owl Carousel 초기화
            carouselContainer.owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000
            });
        })
        .catch(error => console.error('Error loading project data:', error));
});
