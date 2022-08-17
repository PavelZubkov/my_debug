namespace $ {
	export class $my_debug extends $mol_page {
		
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
		 * body / <= List
		 * ```
		 */
		body() {
			return [
				this.List()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * list /
		 * 	1
		 * 	2
		 * 	3
		 * 	4
		 * 	5
		 * 	6
		 * ```
		 */
		list() {
			return [
				1,
				2,
				3,
				4,
				5,
				6
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
		 * checked*? false
		 * ```
		 */
		@ $mol_mem_key
		checked(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return false
		}
		
		/**
		 * ```tree
		 * options *
		 * ```
		 */
		options() {
			return {
			}
		}
		
		/**
		 * ```tree
		 * Check_list $mol_check_list
		 * 	option_checked*? <=> checked*?
		 * 	options <= options
		 * ```
		 */
		@ $mol_mem
		Check_list() {
			const obj = new this.$.$mol_check_list()
			
			obj.option_checked = (id: any, next?: any) => this.checked(id, next)
			obj.options = () => this.options()
			
			return obj
		}
		
		/**
		 * ```tree
		 * options_enabled \
		 * ```
		 */
		options_enabled() {
			return ""
		}
		
		/**
		 * ```tree
		 * List $mol_list rows /
		 * 	<= Check_list
		 * 	<= options_enabled
		 * ```
		 */
		@ $mol_mem
		List() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Check_list(),
				this.options_enabled()
			] as readonly any[]
			
			return obj
		}
	}
	
}

