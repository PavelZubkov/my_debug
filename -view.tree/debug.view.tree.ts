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
		 * 	<= Row_no_binded
		 * 	<= Row_binded
		 * ```
		 */
		body() {
			return [
				this.Row_no_binded(),
				this.Row_binded()
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
		 * Value $mol_view sub / \Значение не выведено
		 * ```
		 */
		@ $mol_mem
		Value() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				"Значение не выведено"
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
		
		/**
		 * ```tree
		 * Row_no_binded $mol_row sub /
		 * 	<= Value
		 * 	<= Button
		 * ```
		 */
		@ $mol_mem
		Row_no_binded() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Value(),
				this.Button()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * value2 NaN
		 * ```
		 */
		value2() {
			return NaN
		}
		
		/**
		 * ```tree
		 * Value2 $mol_view sub /
		 * 	\Значение выведено
		 * 	<= value2
		 * ```
		 */
		@ $mol_mem
		Value2() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				"Значение выведено",
				this.value2()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * submit2?event null
		 * ```
		 */
		@ $mol_mem
		submit2(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Button2 $mol_button_major
		 * 	title \Submit
		 * 	click?event <=> submit2?event
		 * ```
		 */
		@ $mol_mem
		Button2() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Submit"
			obj.click = (event?: any) => this.submit2(event)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Row_binded $mol_row sub /
		 * 	<= Value2
		 * 	<= Button2
		 * ```
		 */
		@ $mol_mem
		Row_binded() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Value2(),
				this.Button2()
			] as readonly any[]
			
			return obj
		}
	}
	
}

