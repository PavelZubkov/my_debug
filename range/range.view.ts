namespace $.$$ {

	export class $my_debug_range extends $.$my_debug_range {

		@ $mol_mem
		value(next?: number) {
			return next ?? this.max()
		}

		@ $mol_action
		event_change( event: Event ) {
			const el = event.target as HTMLInputElement
			el.value = String(this.value( Number(el.value) ))
		}

	}

}
