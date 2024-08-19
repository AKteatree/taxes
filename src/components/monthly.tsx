import {Input} from "@/components/ui/input";

interface TaxProps {
    boop: number;
    bap: React.Dispatch<React.SetStateAction<number>>
}

export default function Monthly({bap, boop}: TaxProps) {

    const apm = 0.7 * boop;
    const gpm = apm * 0.05;
    const vsd_psd_base = apm * 0.9
    const vsd = vsd_psd_base * 0.1252;
    const psd = 64.5;
    const total = vsd + psd + gpm;

    return (
        <>
            <div className={"justify-center align-middle items-center"}>
                <Input value={boop} type={"number"} className={"w-40"} onInput={(event) => {
                    bap(parseFloat(event.currentTarget.value))
                }}  />
            </div>

            <p>gpm: {Math.round(gpm * 100) / 100}</p>
            <p>vsd: {Math.round(vsd * 100) / 100}</p>
            <p>psd: {Math.round(psd * 100) / 100}</p>
            <p className="mt-3 text-2xl">total: {Math.round(total * 100) / 100}</p>
        </>
    )
}