namespace $ {
	export class $my_debug extends $mol_book2 {
		
		/**
		 * ```tree
		 * pages /
		 * 	<= Source_page
		 * 	<= Code_page
		 * 	<= Preview_page
		 * ```
		 */
		pages() {
			return [
				this.Source_page(),
				this.Code_page(),
				this.Preview_page()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Github $mol_link_source uri \https://github.com/PavelZubkov/my_debug/
		 * ```
		 */
		@ $mol_mem
		Github() {
			const obj = new this.$.$mol_link_source()
			
			obj.uri = () => "https://github.com/PavelZubkov/my_debug/"
			
			return obj
		}
		
		/**
		 * ```tree
		 * source? \$my_test $mol_view
		 * ```
		 */
		@ $mol_mem
		source(next?: any) {
			if ( next !== undefined ) return next as never
			return "$my_test $mol_view"
		}
		
		/**
		 * ```tree
		 * Source $mol_textarea value? <=> source?
		 * ```
		 */
		@ $mol_mem
		Source() {
			const obj = new this.$.$mol_textarea()
			
			obj.value = (next?: any) => this.source(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Source_page $mol_page
		 * 	tools / <= Github
		 * 	title \Source
		 * 	body / <= Source
		 * ```
		 */
		@ $mol_mem
		Source_page() {
			const obj = new this.$.$mol_page()
			
			obj.tools = () => [
				this.Github()
			] as readonly any[]
			obj.title = () => "Source"
			obj.body = () => [
				this.Source()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * code \
		 * ```
		 */
		code() {
			return ""
		}
		
		/**
		 * ```tree
		 * Code $mol_text_code
		 * 	render_visible_only false
		 * 	text <= code
		 * ```
		 */
		@ $mol_mem
		Code() {
			const obj = new this.$.$mol_text_code()
			
			obj.render_visible_only = () => false
			obj.text = () => this.code()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Code_page $mol_page
		 * 	title \Code
		 * 	body / <= Code
		 * ```
		 */
		@ $mol_mem
		Code_page() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Code"
			obj.body = () => [
				this.Code()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * node? null
		 * ```
		 */
		@ $mol_mem
		node(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Preview $mol_view sub / <= node?
		 * ```
		 */
		@ $mol_mem
		Preview() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.node()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Preview_page $mol_page
		 * 	title \Preview
		 * 	body / <= Preview
		 * ```
		 */
		@ $mol_mem
		Preview_page() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Preview"
			obj.body = () => [
				this.Preview()
			] as readonly any[]
			
			return obj
		}
	}
	
}

