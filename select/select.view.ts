namespace $.$$ {

	export class $my_debug_select extends $.$my_debug_select {

		menu_content() {
			return [
				... super.menu_content(),
				... this.filter_pattern().length ? [ this.Add_option() ] : [],
			]
		}

		add_option(event: MouseEvent) {
			const option = { [this.filter_pattern()]: this.filter_pattern() }
			this.dictionary( { ...this.dictionary(), ...option } )
			this.event_select( this.filter_pattern(), event )
			this.filter_pattern('')
		}

	}

}
