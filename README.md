# modal-react-library

A library of React modal created with [npm](https://www.npmjs.com/package/@hzdevops/modal-react-library)

## Installation

`npm i @hzdevops/modal-react-library`

## You need to import component

```JSX
import { Modal } from "@hzdevops/modal-react-library/dist"

<Modal/>
```

## Opening & Closing Modal

To display the modal, you must use a local state.
Then, you need to pass a function to the props handleResponse to close the modal.

# Options

To modify the modal title and content, you must use the props `title={}` and `content={}`.
To change the style of the modal and the 'Close' button, you must pass an object to the props `modalStyle={}`and `buttonStyle={}`

## Exemple

```JSX
import { Modal } from "@hzdevops/modal-react-library/dist"

function MyComponent() {

    // Modal state initialisation
    const [isOpen, setModal] = useState(false);

    // Close modal
   const closeModal = () => {
    setModal(false);
  };

    return (
        <>
        <Modal tile={myTitle} content={myContent} modalStyle={{backgroundColor: "red", justifyContent: "left"}}handleResponse={closeModal} />
        </>
    )
}

```

list of available style arguments :

```CSS
backgroundColor,
fontSize,
justifyContent,
width,
height,
color,
boderStyle,
borderWidth,
borderColor,
borderRadius,
```
