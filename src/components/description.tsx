import { DescriptionItem } from "./description-item";
import { Gallery } from "./gallery";

export function Description() {
    return (
        <div className="description">
            <DescriptionItem>
                <h3>Biografia</h3>
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