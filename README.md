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

The modal is invisible by default. To display and close the modal, you must use a local state and pass a function to the props handleResponse to close the modal.

# Options

To modify the title and the content of modal you must use the arguments `title={}` and `content={}`.
To change the appearance of the modal and the button 'Close' you must pass an object to the argument `modalStyle={}`and `buttonStyle={}`

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
