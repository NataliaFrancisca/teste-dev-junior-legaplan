import { TDialogForm } from "@/app/utils/types";
import { forwardRef } from "react"

const Dialog = forwardRef<HTMLDialogElement, TDialogForm>((props, ref) => {
    const { onSubmit, label, legend, input, buttons } = props;

    return(
        <dialog ref={ref} className="component__dialog">
            <form onSubmit={onSubmit}>
                <legend>{legend}</legend>

                <fieldset>
                    <label>{label}</label>

                    {input && 
                        <input
                            required={input?.required}
                            placeholder={input?.placeholder}
                            maxLength={input?.max}
                            minLength={input?.min}
                            onChange={(e) => input?.action(e.target.value)}
                        />
                    }
                </fieldset>
               
                {buttons.cancelDialog ?
                    <div className="group__button">
                        <button type="button" className="btn__grey" onClick={buttons.cancelDialog.action}>{buttons.cancelDialog.message}</button>
                        <button type="submit" className={buttons.submitDialog.color}>{buttons.submitDialog.message}</button>
                   </div>

                   : <button type="submit" className={buttons.submitDialog.color}>
                        {buttons.submitDialog.message}
                    </button>
                }
            </form>
        </dialog>
    );
});

Dialog.displayName = "Dialog";
export default Dialog;