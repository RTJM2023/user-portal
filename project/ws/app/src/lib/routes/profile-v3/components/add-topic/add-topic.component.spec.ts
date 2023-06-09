import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddTopicDialogComponent } from './add-topic.component'

describe('AddTopicDialogComponent', () => {
  let component: AddTopicDialogComponent
  let fixture: ComponentFixture<AddTopicDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTopicDialogComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
