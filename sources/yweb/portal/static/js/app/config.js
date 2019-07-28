/**
 *
 */
class Config {
    /**
     * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
     * 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
     * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
     * 类必须使用new调用，否则会报错
     */
    name = "config";
    host;

    constructor(name) {
        if(name){
            this.name = name
        }
    };

    toString() {
        return '';
    };

    //与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
}

//等同于
/*Config.prototype = {
     constructor() {},
     toString() {},
   };*/

/*
 定义“类”的方法的时候，前面不需要加上function这个关键字，
 直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

 Config.prototype.constructor === Config // true



向类添加新方法
Object.assign(Config.prototype, {
  toString(){},
  toValue(){}
});*/

class Dev extends Config{
    host="localhost";

    constructor(name="dev"){
        super(name);
    };

}


class Prod extends Config{
    host="1234353242";

    constructor(name="prod"){
        super(name);
    };
}

const configs = {
    "dev":Dev,
    "prod":Prod
};

// let env = os.getenv('VELA_ENV', "local");
let env ="dev";

console.log(`初始化环境:[${env}]`);

const config = configs[env];


export default config