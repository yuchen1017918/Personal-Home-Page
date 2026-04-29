// 加载并渲染 Profile.md
document.addEventListener('DOMContentLoaded', function () {
  fetch('Profile.md') // 这里已改成 Profile.md
    .then(res => res.text())
    .then(md => {
      const html = marked.parse(md, {
        highlight: code => hljs.highlightAuto(code).value
      });
      document.getElementById('readme-content').innerHTML = html;
    })
    .catch(err => {
      console.error('Profile 加载失败', err);
      document.getElementById('readme-content').innerText = '加载关于我信息失败';
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// 联系按钮跳转
document.getElementById('contactBtn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// 页面淡入动画
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});