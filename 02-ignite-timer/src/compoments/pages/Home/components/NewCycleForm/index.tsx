import { useForm, useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../../contexts/CyclesContext";


interface CountdownProps {
    activeCycle: any
}


export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)

    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput
                id="task"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
            />


            <label htmlFor="">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                disabled={!!activeCycle}
                step={5}
                min={1}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}