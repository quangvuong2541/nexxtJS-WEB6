import React, { ReactElement, ReactNode } from 'react'
// const HeadingFC = React.FC <{title:string}> = ({title}) => <h1>{title}</h1>

// conventional props
function Heading({ title }: { title: string }) {
    return (
        <h1 >{title}</h1>
    )
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
    return <h1>{children}</h1>
}
//  jsx.element reactElement : hai cái này đều là 1 . và 2 cái này dùng 
// trong trường hợp truyền variable : giá trị vào một component

// React node  chấp nhận các reactElement, string ,text , boolean , null ,
//  undefine ,...... sử dụng chủ yếu vào mục đích : render props

//  default props
const defaultContainerProps = {
    heading: <strong >chào a cường củi</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container(
    { heading, children }:
        ContainerProps
): ReactElement {
    return <h1>
        {heading}     {children}
    </h1>
}
Container.defaultProps = defaultContainerProps;
// function props
function TextWithNumber({
    header,
    children
}: {
    header: (num: number) => ReactNode
    ; children: (num: number) => ReactNode
}) {
    const [state, setState] = React.useState<number>(1)
    return (
        <div >
            <h1 > {header(state)}</h1>
            <div >
                {children(state)}
            </div>
            <div >
                <button onClick={() => setState(state + 1)} >
                    add
                </button>
            </div>
        </div>
    )
}

//  list 
function List<ListItem>(
    {
        item,
        render
    }: {
        item: ListItem[];
        render: (item: ListItem) => ReactNode;
    }
) {
    return (
        <ul>
            {item.map((item, index) => (
                < li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}



const Demo1 = () => {
    return (
        <div>
            <Heading title="hello vtcoder "></Heading>
            <HeadingWithContent>
                <strong> "hi"</strong>
            </HeadingWithContent>

            <Container>
                chào a cường củi
            </Container>


            <TextWithNumber header={(num: number) => <span >Header : {num}</span>}>
                {(num: number) => <div > phú bú z ú tổng số ngày là:| {num}</div>}
            </TextWithNumber>
            <List item= {["vuong" , "phú", "cường"]} 
            render={(item:string) => <div>{item.toLocaleLowerCase()}</div>}> 
            </List>
        </div>
    )
}

export default Demo1