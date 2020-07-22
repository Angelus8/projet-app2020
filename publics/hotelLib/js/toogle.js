Vue.component('modal',{
    template: '<div> <h2>Votre réservation a été prend en compte</h2> <slot></slot> </div>'
})

new Vue({
    el:'#app',
    data() {
        return {
            isShowing : false,
            clearClass : 'clear',
            blurClass : 'blur'
        }
    },
    methods : {
        toggleShow() {
            this.isShowing = !this.isShowing
        }
    }
});