# Kev-Shopi

Este es un paquete de pruebas de despliegue en NPM

### Kev BS
## Example
```
import { ProductCart } from 'kev-shopi'
```
```
<ProductCart
    product={product}
    initialValue={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({reset, increaseBy, maxCount, isMaxReached, count, product}) => (
            <>
                <ProductCart.Img />
                <ProductCart.Title />
                <ProductCart.Btns />
            </>
        )
    }
</ProductCart>
```