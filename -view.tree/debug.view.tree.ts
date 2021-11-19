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
		 * Row!id $mol_row sub / <= name!id
		 * ```
		 */
		@ $mol_mem_key
		Row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.name(id)
			] as readonly any[]
			
			return obj
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
		 * rows /
		 * ```
		 */
		rows() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * List $mol_list rows <= rows
		 * ```
		 */
		@ $mol_mem
		List() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * name!id \
		 * ```
		 */
		name(id: any) {
			return ""
		}
	}
	
}

