let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18,
};

console.log(render(template, data));

function render() {
    const reg = /\{\{(\w+)\}\}/;
    if (reg.test(template)) {
        const key = reg.exec(template)[1];
        template = template.replace(reg, data[key]);
        return render(template, data);
    }
    return template;
}
