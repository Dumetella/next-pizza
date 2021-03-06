import React from 'react'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { Button, Header, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Product, ProductFooter, ProductImage, ProductInner, ProductName, ProductPicture, Section } from '../Main.style'

export default function Other(): JSX.Element {
    const state = useRootStore();
    return (
        <>
            <Header id="other">Другие товары</Header>
            <Section>
                {pseudostore.other.map((item) => (
                    <Product key={item.id} onClick={() => state.UiStore.setCurrentProduct(item)}>
                        <ProductInner>
                            <ProductPicture>
                                <ProductImage src={item.pic} />
                            </ProductPicture>
                            <ProductName>
                                {item.name}
                            </ProductName>
                            {item.desc}
                        </ProductInner>
                        <ProductFooter>
                            <InnerFooter>
                                <MoneyContainer>
                                    от
                                    <MoneyValue> {item.price} </MoneyValue>
                                    <MoneyCurrency>₽</MoneyCurrency>
                                </MoneyContainer>
                                <Button>В корзину</Button>
                            </InnerFooter>
                        </ProductFooter>
                    </Product>
                ))}
            </Section>
        </>
    )
}
