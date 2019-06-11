import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Vahe
                </div>
                <div className={s.dialog}>
                    Hakop
                </div>
                <div className={s.dialog}>
                    Seryan
                </div>
                <div className={s.dialog}>
                    Hrant
                </div>
                <div className={s.dialog}>
                    Aramik
                </div>
                <div className={s.dialog}>
                    Gago
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How do you do?
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}

export default Dialogs;