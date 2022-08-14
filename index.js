const modal = $.modal({
    title: 'My Model',
    closebel: true,
    content:`
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p> 
    `,
    width: '300px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})