'use client';

import { useDialogFormHandler } from "./useDialogHandler";

const DialogForm = () => {
    const { dialogRef, onSubmitForm, setUserName } = useDialogFormHandler();

    return(
        <dialog className="component__dialog component__dialog-form" ref={dialogRef}>
            <form onSubmit={(e) => onSubmitForm(e)}>
                <legend>Para prosseguir, digite seu nome</legend>

                <fieldset>
                    <label>
                        Digite seu nome:
                    </label>
                    <input 
                        type="text" 
                        required 
                        maxLength={10} 
                        minLength={2} 
                        placeholder="Digite"
                        onChange={(e) => setUserName(e.target.value) }
                    />
                </fieldset>
                
                <button type="submit">Iniciar</button>
            </form>
        </dialog>
    )
};

export default DialogForm;