import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 title ="我是一个标题"
 content:string="<h3>我是h3的内容</h3>"

 public students:any=[{
   name:'张三',
   age:8
 },{
  name:'李四',
  age:81
},{
  name:'王五',
  age:18
}
]

  constructor() { }

  ngOnInit() {
  }

}
