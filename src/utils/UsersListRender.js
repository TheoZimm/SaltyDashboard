export default class UserListRender {
    
    constructor(){
        this.render = () => {}
    }

    subscribe(render){
        this.render = render;
    }    

    emit(){
        this.render();
    }

    unsubscribe(){
        this.render = () =>{}
    }
}