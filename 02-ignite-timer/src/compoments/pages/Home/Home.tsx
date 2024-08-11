import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { createContext, useContext, useEffect, useState } from "react";


import { NewCycleForm } from "./components/NewCycleForm"
import { CountDown } from "./components/CountDown"

import * as zod from 'zod';
import { CyclesContext } from "../../../contexts/CyclesContext";


type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(1).max(60)
})

export function Home() {

    const { activeCycle, createNewCycle, interruptCycle } = useContext(CyclesContext)


    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }


    const task = watch('task')
    const isSbubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>


                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <CountDown />


                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCycle} type="button">
                        <HandPalm size={24} />
                        Interomper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSbubmitDisabled} type="submit">
                        <Play size={24} />
                        Comecar
                    </StartCountdownButton>
                )}

            </form>
        </HomeContainer >
    )
}