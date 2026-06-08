import { useState } from "react";
import { DescriptionItem } from "./description-item";
import { Gallery } from "./gallery";
import { Bio } from "./bio";

export function Description() {
    return (
        <div className="description">
            <DescriptionItem>
                <Bio/>
            </DescriptionItem>
            <DescriptionItem>
                <h3>Sobre</h3>
            </DescriptionItem>
            <DescriptionItem>
                <h3>Galeria</h3>
                <Gallery />
            </DescriptionItem>


        </div>
    )
}