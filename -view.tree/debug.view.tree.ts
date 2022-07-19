namespace $ {
	export class $my_debug extends $mol_page {
		
		/**
		 * ```tree
		 * name?
		 * ```
		 */
		name(next?: any) {
			return this.model().name(next)
		}
		
		/**
		 * ```tree
		 * counter?
		 * ```
		 */
		counter(next?: any) {
			return this.model().counter(next)
		}
		
		/**
		 * ```tree
		 * model $my_debug_model
		 * 	name? => name?
		 * 	counter? => counter?
		 * ```
		 */
		@ $mol_mem
		model() {
			const obj = new this.$.$my_debug_model()
			
			return obj
		}
		
		/**
		 * ```tree
		 * title \$my_debug
		 * ```
		 */
		title() {
			return "$my_debug"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Name_block
		 * 	<= Counter_block
		 * ```
		 */
		body() {
			return [
				this.Name_block(),
				this.Counter_block()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Name_value $mol_view sub / <= name
		 * ```
		 */
		@ $mol_mem
		Name_value() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.name()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Name_control $mol_string value? <=> name?
		 * ```
		 */
		@ $mol_mem
		Name_control() {
			const obj = new this.$.$mol_string()
			
			obj.value = (next?: any) => this.name(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Name_block $mol_labeler
		 * 	title \Name
		 * 	content /
		 * 		<= Name_value
		 * 		<= Name_control
		 * ```
		 */
		@ $mol_mem
		Name_block() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Name"
			obj.content = () => [
				this.Name_value(),
				this.Name_control()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Counter_value $mol_view sub / <= counter
		 * ```
		 */
		@ $mol_mem
		Counter_value() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.counter()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Counter_control $mol_number value? <=> counter?
		 * ```
		 */
		@ $mol_mem
		Counter_control() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.counter(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Counter_block $mol_labeler
		 * 	title \Counter
		 * 	content /
		 * 		<= Counter_value
		 * 		<= Counter_control
		 * ```
		 */
		@ $mol_mem
		Counter_block() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Counter"
			obj.content = () => [
				this.Counter_value(),
				this.Counter_control()
			] as readonly any[]
			
			return obj
		}
	}
	
}

