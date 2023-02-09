# modal-react-library

A library of React modal created using [`create-component-lib`](https://www.npmjs.com/package/create-component-lib).

## Installation

```
npm install modal-react-library
```

## You need to import component

import { Modal } from "@hzdevops/modal-react-library/dist"

<Modal />

## Opening & Closing Modal

The modal is invisible by default. To display and close the modal,  you must pass a function to the props handleResponse

import { Modal } from "@hzdevops/modal-react-library/dist"

function MyComponent() {
    return (
        <>
        <Modal content= "content" handleResponse={statusModal} />
        </>
    )
}

## Exemple

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
        <Modal content= "content" handleResponse={closeModal} />
        </>
    )
}
