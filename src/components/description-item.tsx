import { PropsWithChildren } from "react";

export function DescriptionItem({ children }: PropsWithChildren) {
    return (
        <div className="description-item" >
            {children}
        </div>
    )

}