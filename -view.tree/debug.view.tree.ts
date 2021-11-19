namespace $ {
	export class $my_debug extends $mol_page {
		
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
		 * Row!id $mol_row sub /
		 * 	<= name!id
		 * 	<= age!id
		 * ```
		 */
		@ $mol_mem_key
		Row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.name(id),
				this.age(id)
			] as readonly any[]
			
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
		
		/**
		 * ```tree
		 * age!id \
		 * ```
		 */
		age(id: any) {
			return ""
		}
	}
	
}

