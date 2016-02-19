##JSS is a JavaScript Style

How to use:

1. `npm install jss --save`
2. Write style:
`import JSS from 'jss'
let style = {
    phone: {
        width: '320px',
        height: '480px',
        border: '1px solid black',

        iOS: {
           color: 'red',
           iPhone: {
                width: '480px',
                height: '568px'
           }
        }
    }
};
export default JSS(style)`
3) Create stylized component:
`let reactElement = <div style={style.phone.iOS()}>text</div>`