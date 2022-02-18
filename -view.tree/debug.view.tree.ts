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
		 * body /
		 * 	<= Value
		 * 	<= Button
		 * ```
		 */
		body() {
			return [
				this.Value(),
				this.Button()
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
		 * Value $mol_view sub / \No binded
		 * ```
		 */
		@ $mol_mem
		Value() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				"No binded"
			] as readonly any[]
			
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
	}
	
}

