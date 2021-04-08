import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DiagnosisDialogComponent } from '../diagnosis-dialog/diagnosis-dialog.component';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';


@Component({
  selector: 'app-active-diagnosis-panel',
  templateUrl: './active-diagnosis-panel.component.html',
  styleUrls: ['./active-diagnosis-panel.component.css']
})
export class ActiveDiagnosisPanelComponent implements OnInit {
  displayedColumns: string[] = ['code', 'rxfilter', 'trend', 'firstOnset'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataservice: DataService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataservice.conditions.activeConditions);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'firstOnset': return moment(item[property]).unix();
        case 'code': return item[property].text.toUpperCase();
        default: return item[property];
      }
    };
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onRowClicked(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '700px';
    dialogConfig.data = {
      name: this.dataservice.demographic.name,
      condition: row.code.text,
      history: row.history
    };
    this.dialog.open(DiagnosisDialogComponent, dialogConfig);
  }

  switchToHM() {
    this.router.navigate(['/maint'], { queryParamsHandling: 'merge' });
  }

  switchToHS() {
    this.router.navigate(['/status'], { queryParamsHandling: 'merge' });
  }
}
