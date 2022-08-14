function _createModal(options){
    const modal = document.createElement('div')
    const destroyfault_width = '600px'
    modal.classList.add('vmodal')

    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay">
            <div class="modal-window" style="width: ${options.width || destroyfault_width}">
                <div class = "modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closebel ? `<span class="modal-close>&times;</span>"`: ''}
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)

    document.body.appendChild(modal)
    return modal
}

$.modal = function(options){
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing =false
    return{
        open(){
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing =false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}