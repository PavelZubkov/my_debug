namespace $ {
	export class $my_debug extends $mol_list {
		
		/**
		 * ```tree
		 * domain $my_debug_domain
		 * ```
		 */
		@ $mol_mem
		domain() {
			const obj = new this.$.$my_debug_domain()
			
			return obj
		}
		
		/**
		 * ```tree
		 * rows / <= Object_list
		 * ```
		 */
		rows() {
			return [
				this.Object_list()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Object!id $mol_expander
		 * 	expanded?val <=> object_expanded!id?val
		 * 	label / <= Object_title!id
		 * 	Content <= Object_content!id
		 * ```
		 */
		@ $mol_mem_key
		Object(id: any) {
			const obj = new this.$.$mol_expander()
			
			obj.expanded = (val?: any) => this.object_expanded(id, val)
			obj.label = () => [
				this.Object_title(id)
			] as readonly any[]
			obj.Content = () => this.Object_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Place!id $mol_view sub / <= place_title!id
		 * ```
		 */
		@ $mol_mem_key
		Place(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.place_title(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_rows /
		 * ```
		 */
		object_rows() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Object_list $mol_list rows <= object_rows
		 * ```
		 */
		@ $mol_mem
		Object_list() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.object_rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_expanded!id?val false
		 * ```
		 */
		@ $mol_mem_key
		object_expanded(id: any, val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * object_title!id \
		 * ```
		 */
		object_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Object_title!id $mol_view sub / <= object_title!id
		 * ```
		 */
		@ $mol_mem_key
		Object_title(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.object_title(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_content!id /
		 * ```
		 */
		object_content(id: any) {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Object_content!id $mol_list rows <= object_content!id
		 * ```
		 */
		@ $mol_mem_key
		Object_content(id: any) {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.object_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * place_title!id \
		 * ```
		 */
		place_title(id: any) {
			return ""
		}
	}
	
}

