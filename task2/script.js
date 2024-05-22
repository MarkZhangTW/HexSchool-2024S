function activate(tag) {
    document.querySelectorAll('.activated').forEach(tag => tag.classList.remove('activated'));
    let index = [].indexOf.call(document.querySelectorAll('.wrap>.header>.menu>.item>a'), tag);
    document.querySelectorAll('.wrap>.header>.menu>.item')[index]?.classList.add('activated');
    document.querySelectorAll('.wrap>.content')[index]?.classList.add('activated');
}
document.querySelector('.wrap>.header>.menu>.item:nth-child(2)>a').click();