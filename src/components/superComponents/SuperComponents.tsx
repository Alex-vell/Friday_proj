import React from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";

export const SuperComponents = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100px'}}>
            <SuperInputText/>
            <SuperButton>Click</SuperButton>
            <SuperCheckbox/>
          {/*  <SuperEditableSpan onChangeText={''}/>*/}
            <SuperSelect/>
            <SuperRadio/>
        </div>
    )
}