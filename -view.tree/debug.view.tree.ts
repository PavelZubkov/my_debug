namespace $ {
	export class $my_debug extends $mol_page {
		
		/**
		 * ```tree
		 * title @ \Tree
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$my_debug_title' )
		}
		
		/**
		 * ```tree
		 * body / <= Tree_list
		 * ```
		 */
		body() {
			return [
				this.Tree_list()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Object_row!id $mol_expander
		 * 	label / <= Object_row_title!id
		 * 	expanded?val <=> object_row_expanded!id?val
		 * 	Content <= Object_row_content!id
		 * ```
		 */
		@ $mol_mem_key
		Object_row(id: any) {
			const obj = new this.$.$mol_expander()
			
			obj.label = () => [
				this.Object_row_title(id)
			] as readonly any[]
			obj.expanded = (val?: any) => this.object_row_expanded(id, val)
			obj.Content = () => this.Object_row_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Meter_icon_water_hot $mol_icon_water
		 * ```
		 */
		@ $mol_mem
		Meter_icon_water_hot() {
			const obj = new this.$.$mol_icon_water()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Meter_icon_water_cold $mol_icon_water
		 * ```
		 */
		@ $mol_mem
		Meter_icon_water_cold() {
			const obj = new this.$.$mol_icon_water()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Meter_icon_energy $mol_icon_flash
		 * ```
		 */
		@ $mol_mem
		Meter_icon_energy() {
			const obj = new this.$.$mol_icon_flash()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Meter_row!id $mol_link
		 * 	arg * meter <= meter_link!id
		 * 	sub /
		 * 		<= meter_icon!id
		 * 		<= meter_title!id
		 * ```
		 */
		@ $mol_mem_key
		Meter_row(id: any) {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				meter: this.meter_link(id)
			})
			obj.sub = () => [
				this.meter_icon(id),
				this.meter_title(id)
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
		 * Tree_list $mol_list rows <= object_rows
		 * ```
		 */
		@ $mol_mem
		Tree_list() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.object_rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_row_title!id \Object
		 * ```
		 */
		object_row_title(id: any) {
			return "Object"
		}
		
		/**
		 * ```tree
		 * Object_row_title!id $mol_paragraph sub / <= object_row_title!id
		 * ```
		 */
		@ $mol_mem_key
		Object_row_title(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.sub = () => [
				this.object_row_title(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_row_expanded!id?val false
		 * ```
		 */
		@ $mol_mem_key
		object_row_expanded(id: any, val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * object_row_content!id /
		 * ```
		 */
		object_row_content(id: any) {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Object_row_content!id $mol_list rows <= object_row_content!id
		 * ```
		 */
		@ $mol_mem_key
		Object_row_content(id: any) {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.object_row_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * meter_link!id \
		 * ```
		 */
		meter_link(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * meter_icon!id $mol_view
		 * ```
		 */
		@ $mol_mem_key
		meter_icon(id: any) {
			const obj = new this.$.$mol_view()
			
			return obj
		}
		
		/**
		 * ```tree
		 * meter_title!id \
		 * ```
		 */
		meter_title(id: any) {
			return ""
		}
	}
	
}

