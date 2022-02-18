namespace $ {
	export class $my_debug extends $mol_page {
		
		/**
		 * ```tree
		 * tools / <= Source
		 * ```
		 */
		tools() {
			return [
				this.Source()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= Row_no_binded
		 * ```
		 */
		body() {
			return [
				this.Row_no_binded()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Source $mol_link_source uri \https://github.com/PavelZubkov/my_debug
		 * ```
		 */
		@ $mol_mem
		Source() {
			const obj = new this.$.$mol_link_source()
			
			obj.uri = () => "https://github.com/PavelZubkov/my_debug"
			
			return obj
		}
		
		/**
		 * ```tree
		 * submit?event null
		 * ```
		 */
		@ $mol_mem
		submit(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Button $mol_button_major
		 * 	title \Submit
		 * 	click?event <=> submit?event
		 * ```
		 */
		@ $mol_mem
		Button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Submit"
			obj.click = (event?: any) => this.submit(event)
			
			return obj
		}
		
		/**
		 * ```tree
		 * value NaN
		 * ```
		 */
		value() {
			return NaN
		}
		
		/**
		 * ```tree
		 * Value $mol_view sub / <= value
		 * ```
		 */
		@ $mol_mem
		Value() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.value()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Row_no_binded $mol_row sub /
		 * 	<= Button
		 * 	<= Value
		 * ```
		 */
		@ $mol_mem
		Row_no_binded() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Button(),
				this.Value()
			] as readonly any[]
			
			return obj
		}
	}
	
}

