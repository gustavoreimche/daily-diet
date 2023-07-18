import { Component, Input } from "@angular/core";

@Component({
	selector: "icon-add",
	template: `
		<svg
			width="18"
			height="18"
			viewBox="0 0 32 32"
			[attr.fill]="color"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
				[attr.fill]="color"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16 4C16.5523 4 17 4.44772 17 5V27C17 27.5523 16.5523 28 16 28C15.4477 28 15 27.5523 15 27V5C15 4.44772 15.4477 4 16 4Z"
				[attr.fill]="color"
			/>
		</svg>
	`,
	styles: [],
})
export class AddComponent {
	@Input() color: string = "white";
}

