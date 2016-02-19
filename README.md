##JSS is a JavaScript Style

How to use:

1. `npm install https://github.com/Apacherus/JSS --save`
2. Write style:

```js
import JSS from 'jss'
import mainStyle from './main'
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
    },

    user: {
        base: mainStyle.default(),
        color: 'red',
        profile: {
            image: {
                width: '100px',
                height: '100px',
                background: '#ccc'
            }
        }
    }
};
export default JSS(style)
```

3) Create stylized component:
```js
let reactElement = <div style={style.phone.iOS()}>text</div>
```

###Predefined properties
- `[object]._me` : basic (same) element props
- `[object]._parent` : props inherited from parent
- `[object]._base` : props imported from base prop

### To Do first:
- pseudo selectors: `:after`, `:before`, `:hover`, `:active`, `:focus`
- media queries
- keyframes, animations
- autoprefixer