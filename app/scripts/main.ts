import GraphEditor from "./graph-editor";

(function () { 
   console.time('GraphEditor');

   let root: HTMLElement|null = document.querySelector('.graph_editor');
   if (!root) {
      console.log('Не удалось получить элемент .graph_editor');
      alert('Error. Cannot create the Graph Editor');
      return;
   }
   
   let graphEditor = new GraphEditor(root);

   graphEditor.projectManager.createNewProject();
   graphEditor.projectManager.createNewProject();

   console.timeEnd('GraphEditor');

   (<any>window).g = graphEditor;
}());