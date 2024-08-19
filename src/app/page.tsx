'use client';

import {useState} from "react";
import Yearly from "@/components/yearly";
import Monthly from "@/components/monthly";

export default function Home() {

    const [monthly, setMonthly] = useState<boolean>(true);

    const [boop, bap] = useState<number>(0);

    return (
        <div className={"flex h-screen flex-col"}>
            <div className="align-middle items-center text-center border-b-2 border-red-800">
                <h1 className="text-3xl">taxes yippee</h1>
            </div>
            <div className={"flex flex-wrap justify-center"}>
                <button onClick={() => {setMonthly(true)}} className={"border-2 rounded border-red-800 m-3"}>monthly</button>
                <button onClick={() => {setMonthly(false)}} className={"border-2 rounded border-red-800 m-3"}>yearly</button>
            </div>
            <div className={"w-full h-full border-2 border-red-800"}>
                {monthly ? <Monthly boop={boop} bap={bap} /> : <Yearly boop={boop} bap={bap} />}
            </div>
        </div>
    )
}