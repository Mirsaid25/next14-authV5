"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
    href:string,
    label:string
}
 
const BackButton: React.FunctionComponent<BackButtonProps> = ({href, label}) => {
    return (
        <Button 
            variant={"link"}
            className="font-normal w-full"
            size={"sm"}
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}
 
export default BackButton;