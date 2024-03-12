
const Main = {
    init: function() {
        this.cacheSelectors()
        this.BindEvents()
    },

    cacheSelectors: function() {
        this.checkButtons = document.querySelectorAll('.check')
    },

    BindEvents: function() {
        const self = this
        this.checkButtons.forEach(function(button) {
           button.onclick = self.Events.checkButton_click
        })
    },


    Events: {
        checkButton_click: function() {
            alert('ok')
        }
    }
}

Main.init()