USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnDocument]    Script Date: 01/11/2024 5:00:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES  where  TABLE_NAME='trnDocument_history')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocument_history]
END
GO
CREATE TABLE [dbo].[trnDocument_history](
	[trnDocument_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnDocumentID] [bigint]  NOT NULL,
	[trnDocumentPrefix] [varchar](50) NULL,
	[trnDocumentNo] [varchar](255) NULL,
	[GateInType] [varchar](50) NULL,
	[AgentID] [int] NULL,
	[AgentName] [varchar](255) NULL,
	[LineID] [int] NULL,
	[LineName] [varchar](255) NULL,
	[LocationFromID] [int] NULL,
	[LocationFrom] [varchar](255) NULL,
	[VCNID] [bigint] NULL,
	[VCNNO] [varchar](255) NULL,
	[VesselName] [varchar](255) NULL,
	[VOYNO] [varchar](255) NULL,
	[Remarks] [varchar](255) NULL,
	[Createdby] [bigint] NULL,
	[YearID] [int] NULL,
	[CycleID] [int] NULL,
	[CycleName] [varchar](255) NULL,
	[ContactName] [varchar](255) NULL,
	[ContactNumber] [varchar](255) NULL,
	[NoOf20] [int] NULL,
	[NoOf40] [int] NULL,
	[NoOf45] [int] NULL,
	[MstrUomID] [int] NULL,
	[MstrUomName] [varchar](max) NULL,
	[SpaceCerificateIssuedTo] [varchar](max) NULL,
	[BillCommodity] [varchar](max) NULL,
	[BillCommodityID] [int] NULL,
	[CargoType] [varchar](max) NULL,
	[CargoTypeID] [int] NULL,
	[TotalArea] [decimal](18, 2) NULL,
	[IsFinished] [bit] NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Status] [char](1) NOT NULL,
	[StatusRemarks] [varchar](max) NULL,
	[HoldAgency] [varchar](255) NULL,
	[HoldAgencyID] [int] NULL,
	[ExpectedDateWH] [datetime] NULL,
	[ExpectedReqPeriodInWH] [int] NULL,
	[AdditionalArea] [decimal](18, 2) NULL,
	[AreaRequired] [decimal](18, 2) NULL,
	[PortLoading] [varchar](max) NULL,
	[Consolidator] [varchar](max) NULL,
	[ConsolidatorID] [int] NULL,
	[CHACellNo] [varchar](max) NULL,
	[CHAPerson] [varchar](max) NULL,
	[DeleteReason] [varchar](255) NULL,
	[Caption] varchar(255) Null
) ON [PRIMARY]  TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnDocument_history] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnDocument_history] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnDocument_history] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnDocument_history] ADD  DEFAULT ('P') FOR [Status]
GO

