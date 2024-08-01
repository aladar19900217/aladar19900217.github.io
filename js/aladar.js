/////////////////////////
    function openImagePopup() {
      // 線上圖片的 URL
      var imageUrl = 'https://qr-official.line.me/gs/M_934mcllz_BW.png?oat_content=qr';
      var windowFeatures = 'width=500,height=500'; // 視窗大小可以根據需求調整

      // 打開新的彈出視窗並顯示線上圖片
      window.open(imageUrl, '_blank', windowFeatures);
    }
/////////////////////////

    function openImagePopup2() {
      // 線上圖片的 URL
      var imagePath = 'images/webQR.png';
      var windowFeatures = 'width=500,height=500'; // 視窗大小可以根據需求調整

      // 打開新的彈出視窗並顯示線上圖片
      window.open(imagePath, '_blank', windowFeatures);
    }
////////////////////////////
        jQuery(document).ready(function() {
            var headerHeight = 106; // 固定頂端元素的高度

            // 自動滾動到 URL 包含的錨點位置
            var offset = jQuery(':target').offset();
            if (offset) {
                var scrollto = offset.top - headerHeight; // 減去固定頂端元素的高度
                jQuery('html, body').animate({scrollTop: scrollto}, 0);
            }

            // 為超連結添加點擊事件處理程序
            jQuery('.header_section a').on('click', function(e) {
                var targetId = jQuery(this).attr('href');
                var targetElement = jQuery(targetId);
                if (targetElement.length) {
                    e.preventDefault();
                    var offset = targetElement.offset().top - headerHeight; // 減去固定頂端元素的高度
                    jQuery('html, body').animate({scrollTop: offset}, 300);
                }
            });
        });
////////////////////////////
    function showImage() {
      // 線上圖片的 URL
      var imageUrl = 'https://qr-official.line.me/gs/M_934mcllz_BW.png?oat_content=qr';

      // 找到圖片容器的元素
      var imageContainer = document.getElementById('imageContainer');

      // 創建一個 img 元素
      var imgElement = document.createElement('img');

      // 設置 img 元素的 src 屬性為圖片的 URL
      imgElement.src = imageUrl;

      // 將 img 元素添加到圖片容器中
      imageContainer.appendChild(imgElement);
    }
////////////////////////////
function smoothScrollTo(targetPosition, duration) {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const newPosition = easeInOutCubic(elapsedTime, start, targetPosition - start, duration);
    window.scrollTo(0, newPosition);
    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

// 使用示例
smoothScrollTo(0, 3000); // 滚动到页面顶部，持续时间为1秒（1000毫秒）
//////////////////////////////////
    document.addEventListener('DOMContentLoaded', function() {
        const blogId = '7321352614372128724'; // 替换为你的 Blogger 部落格的 ID
        const apiKey = 'AIzaSyBcdOAndt3T7bF8FDFI22ArMSuSQzcXIzQ'; // 替换为你的 Google Cloud API 密钥

        // 要显示的特定文章ID
        const specificPostIds = [
            '5934904779626197716', // 第二张幻灯片的文章 ID
            '1126117996620924082'  // 第三张幻灯片的文章 ID
        ];

        // Blogger API endpoint
        const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`;

        // Fetch latest blog post
        fetch(`${apiUrl}?key=${apiKey}&fetchBodies=true&maxResults=1`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const latestPost = data.items[0];
                    const title = latestPost.title;
                    const content = latestPost.content;
                    const url = latestPost.url;

                    // Display title without hyperlink
                    document.getElementById('newsTitle').textContent = title;
                    document.getElementById('newsTitle').style.textDecoration = 'none'; // Remove underline
                    document.getElementById('newsTitle').style.fontWeight = 'normal'; // Remove bold
                    document.getElementById('newsTitle').style.backgroundColor = 'transparent'; // Remove background color
                    document.getElementById('newsTitle').style.border = 'none'; // Remove border

                    // Display content
                    document.getElementById('newsContent').innerHTML = content;
                } else {
                    document.getElementById('newsTitle').textContent = 'No latest article found';
                    document.getElementById('newsContent').textContent = 'Unable to load latest blog post.';
                }
            })
            .catch(error => {
                console.error('Error fetching latest blog post:', error);
                document.getElementById('newsTitle').textContent = 'Error';
                document.getElementById('newsContent').textContent = 'An error occurred while fetching the latest article.';
            });

        // Fetch and display specific blog posts
        specificPostIds.forEach((postId, index) => {
            fetch(`${apiUrl}/${postId}?key=${apiKey}&fetchBodies=true`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        const title = data.title;
                        const content = data.content;
                        const titleElement = document.getElementById(`specificTitle${index + 2}`);
                        const contentElement = document.getElementById(`specificContent${index + 2}`);

                        titleElement.innerHTML = title;
                        contentElement.innerHTML = content;
                    } else {
                        document.getElementById(`specificTitle${index + 2}`).innerHTML = 'Article Not Found';
                        document.getElementById(`specificContent${index + 2}`).innerHTML = 'The content for this article could not be found.';
                    }
                })
                .catch(error => {
                    console.error(`Error fetching post ${postId}:`, error);
                    document.getElementById(`specificTitle${index + 2}`).innerHTML = 'Error';
                    document.getElementById(`specificContent${index + 2}`).innerHTML = 'An error occurred while fetching this article.';
                });
        });
    });
///////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  // 获取 Navbar 的 Collapse 实例
  var menuToggle = document.getElementById('navbarSupportedContent');
  var bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false // 设置为 false 可以阻止自动收合
  });

  // 监听导航链接的点击事件
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      bsCollapse.hide(); // 手动关闭 Navbar
    });
  });
});
//////////////////////////////////////
// 在页面加载完成时显示加载动画
/*document.addEventListener("DOMContentLoaded", function() {
 document.querySelector(".loader").style.opacity = "1";
  
 setTimeout(function() {
  document.querySelector(".loader").style.opacity = "0";
    
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style.display = "none";
      document.querySelector("#contentlogo").classList.remove("hidden");
      document.querySelector("#contentlogo").classList.add("visible");
    }, 2000); // Adjust timing to match your CSS transition duration
  }, 2000); // Adjust timing to simulate loading time
});

// 在窗口完全加载时显示加载动画
window.addEventListener("load", function() {
  document.querySelector(".loader").style.opacity = "1";
  
  setTimeout(function() {
    document.querySelector(".loader").style.opacity = "0";
    
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style.display = "none";
      document.querySelector("#contentlogo").classList.remove("hidden");
      document.querySelector("#contentlogo").classList.add("visible");
    }, 2000); // Adjust timing to match your CSS transition duration
  }, 2000); // Adjust timing to simulate loading time
});*/
////////////////////////////
